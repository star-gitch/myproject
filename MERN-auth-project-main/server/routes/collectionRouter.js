const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const LikeArticle = require("../models/likeArticleModel");
const Article = require("../models/articleModel");
const User = require("../models/userModel");

router.post('/create', async (req, res) => {

	try {
		let { ownerID, articleID } = req.body;
		const likeArticle = new LikeArticle({
			ownerID,
			articleID,
		});
		await likeArticle.save();
		res.json({
			msg: "success"
		});
	} catch (err) {
		res.status(500).json({ msg: err.message });
	}
});

router.post('/get', async (req, res) => {

	try {
		let { ownerID, articleID } = req.body;
		
		const article = await LikeArticle.find({ownerID: ownerID, articleID: articleID});
		const registerStatus = Object.keys(article).length;
		
		if ( registerStatus ) {
			res.json({ msg: 'exist' });
		} else {
			res.json({ msg: 'no_exist' });
		}
		
	} catch (err) {
		
	}
});

router.get('/get/:id', async (req, res) => {

	const articles = await LikeArticle.find({ownerID: req.params.id});
	var articleMaps = [];

	if ( Object.keys(articles).length ) {
		await Promise.all(articles.map( async (article, index) => {
			var articleMap = [];
			const story = await Article.find({ _id: article.articleID });
			const authorID = story[0].userID;
			const user = await User.find({ _id: authorID });
			
			articleMap = {
				author: user[0].displayName,
				title: story[0].title,
				content: story[0].content,
				id: story[0]._id,
				likeArticleID: article._id
			};
			articleMaps.push(articleMap);
		}));
	}
	res.json(articleMaps);
});

router.delete('/delete/:id', async (req, res) => {

	LikeArticle.deleteOne({_id: req.params.id}, (error, data) => {
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

module.exports = router;