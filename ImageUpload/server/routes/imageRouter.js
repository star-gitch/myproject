const router = require("express").Router();
const imageUpload = require('../middleware/imageUpload');
const Image = require("../models/imageModel");

router.post("/upload", imageUpload.single('imgg'), async (req, res, next) => {
	try {
		const { title, description, userId } = req.body;
		const url = req.protocol + '://' + req.get('host') + '/uploads/';
		const img_url = url + req.file.filename;

		const imageInfo = new Image({
	      	title: title,
	      	description: description,
	      	userId: userId,
	      	url: img_url,
	    });
	    const result = await imageInfo.save();
	    res.json({status: 200, id: result['_id'], url: result['url']});
	} catch (err) {
		res.json({status: 500});
	}
});

router.get("/get/:id", async (req, res) => {

  let imageId = req.params.id;
  const image = await Image.find({_id: imageId});
  res.json(image);
});

module.exports = router;