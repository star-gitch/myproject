const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  	//userID: { type: String, required: true },
  	userID: { type: mongoose.Schema.Types.ObjectId, ref: "userID", required: true },
  	title: { type: String, required: true },
  	content: { type: String, required: true },
},
	{ timestamps: { createdAt: true }},
);

module.exports = Article = mongoose.model("article", articleSchema);