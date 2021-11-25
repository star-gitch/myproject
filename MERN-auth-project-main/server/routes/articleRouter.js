const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const Article = require("../models/articleModel");
const User = require("../models/userModel");
const LikeArticle = require("../models/likeArticleModel");

router.post("/create", async (req, res) => {

	try {
		let { title, content, userID } = req.body;
		const newArticle = new Article({
			userID,
			title,
			content,
		});
		const savedArticle = await newArticle.save();
		res.json({
			msg: "success"
		});
	} catch (err) {
		res.status(500).json({ msg: err.message });
	}
});

router.get("/get", async (req, res) => {

	const articles = await Article.find({});
	var articleMaps = [];

	await Promise.all(articles.map( async (article, index) => {
		var articleMap = [];
		const user = await User.find({ _id: article.userID });
		const author = user[0].displayName;
		articleMap = {
			author: author,
			title: article.title,
			content: article.content,
			id: article._id
		};
		articleMaps.push(articleMap);
	}));
	res.json(articleMaps);
});

router.delete('/delete/:id', async (req, res) => {

	// After checking if deleted article is included to collection, if exist, remove article from collection.
	LikeArticle.deleteOne({ articleID: req.params.id });

	Article.deleteOne({_id: req.params.id}, (error, data) => {
		if (error) {
			res.status(500).json({ msg: error.message });
		} else {
			res.status(200).json({ 
				msg: 'success',
				del_id: req.params.id
			});
		}
	});
});

router.get('/get/:id', async (req, res) => {

	const article = await Article.findOne({_id: req.params.id});
	res.json(article);
});

router.put('/update', async (req, res) => {
	
	const filter = { _id: req.body.id };
	const update = { title: req.body.title, content: req.body.content };
	await Article.findOneAndUpdate(filter, update);

	//After updating, get all data again.
	const articles = await Article.find({});
	var articleMaps = [];

	await Promise.all(articles.map( async (article, index) => {
		var articleMap = [];
		const user = await User.find({ _id: article.userID });
		const author = user[0].displayName;
		articleMap = {
			author: author,
			title: article.title,
			content: article.content,
			id: article._id
		};
		articleMaps.push(articleMap);
	}));
	res.json(articleMaps);

});
module.exports = router;