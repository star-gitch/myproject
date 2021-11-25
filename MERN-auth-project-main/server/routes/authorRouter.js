const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const Article = require("../models/articleModel");
const User = require("../models/userModel");

router.get('/get/:id', async (req, res) => {

	const author = await User.findOne({displayName: req.params.id});

	// When author no exist
	if ( author === null ) {
		res.json({ msg: 'no author' });
	} else {
		const articles = await Article.find({ userID: author._id });
		if ( Object.keys(articles).length ) {

			var articleMaps = [];
			await Promise.all(articles.map( async (article, index) => {
				var articleMap = [];
				
				articleMap = {
					author: author.displayName,
					title: article.title,
					content: article.content,
					id: article._id
				};
				articleMaps.push(articleMap);
			}));

			res.json({
				msg: 'success',
				article: articleMaps
			});

		} else {
			// When author doesn't have article
			res.json({ msg: 'no article' });
		}
	}
});
module.exports = router;