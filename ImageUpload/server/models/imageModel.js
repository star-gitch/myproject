const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	userId: { type: String, required: true },
	url: { type: String, required: true },
},
{ timestamps: { createdAt: true }});

module.exports = Image = mongoose.model("image", imageSchema);
