const mongoose = require("mongoose");

const likeArticleSchema = new mongoose.Schema({
  ownerID: { type: mongoose.Schema.Types.ObjectId, required: true },
  articleID: { type: mongoose.Schema.Types.ObjectId, required: true },
});

module.exports = LikeArticle = mongoose.model("likeArticle", likeArticleSchema);