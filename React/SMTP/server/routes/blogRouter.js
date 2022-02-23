const router = require("express").Router();
const imageUpload = require('../middleware/imageUpload');
var mysql = require('mysql');

var con;

// router.post("/imgupload", imageUpload.single('imagesArray'), async (req, res, next) => {

// 	res.json(req.file.filename);
// });

router.post("/create", imageUpload.single('img'), async (req, res, next) => {
	try {

		con = mysql.createConnection({
			host: "localhost",
			user: "root",
			password: "",
			database: "mandhira"
		});
		con.connect();

		const { title, ref_url, content, } = req.body;
		const url = req.protocol + '://' + req.get('host') + '/uploads/';
		const img_url = url + req.file.filename;


		var sql = `INSERT INTO blog (title, content,  img_url, ref_url) VALUES ('${title}', '${content}', '${img_url}', '${ref_url}')`;

		con.query(sql, function (err, result) {
			if (err) throw err;
			res.json({status: 200});
		});
		con.end();

	} catch (err) {
		res.json({status: 500});
	}
});

router.get("/all", async (req, res) => {

	con = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "",
		database: "mandhira"
	});

	con.connect();
	var sql = "SELECT * FROM blog";
	con.query(sql, async function (err, result, fields) {
		if (err) throw err;
		var blogAll = Object.values(JSON.parse(JSON.stringify(result)));
		var blogMaps = [];
		await Promise.all(blogAll.map( async (blog, index) => {
			var blogMap = [];
			blogMap = {
				id: blog.id,
				index: index,
				title: blog.title,
				content: blog.content,
				img: blog.img_url,
				ref: blog.ref_url,
			};
			blogMaps.push(blogMap);
		}));
		res.json(blogMaps);
	});
	con.end();
});

router.delete('/delete/:id', async (req, res) => {

	var delId = req.params.id
	con = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "",
		database: "mandhira"
	});

	con.connect();
	var sql = `DELETE FROM blog WHERE id = ${delId}`;
	con.query(sql, function (err, result) {
		if (err) throw err;
	});

	var sql = "SELECT * FROM blog";
	con.query(sql, async function (err, result, fields) {
		if (err) throw res.status(500).json({ msg: err.message });
		// success
		var blogAll = Object.values(JSON.parse(JSON.stringify(result)));
		var blogMaps = [];
		await Promise.all(blogAll.map( async (blog, index) => {
			var blogMap = [];
			blogMap = {
				id: blog.id,
				index: index,
				title: blog.title,
				content: blog.content,
				img: blog.img_url,
				ref: blog.ref_url,
			};
			blogMaps.push(blogMap);
		}));
		
		res.status(200).json({ 
			msg: 'success',
			blog: blogMaps
		});
	});
	con.end();
});

router.get("/edit/:id", async (req, res) => {

	try {

		let editId = req.params.id;
		con = mysql.createConnection({
			host: "localhost",
			user: "root",
			password: "",
			database: "mandhira"
		});

		var sql = `SELECT * FROM blog WHERE id = ${editId}`; 

		con.connect(function(err) {
			if (err) throw err;
			con.query(sql, function (err, result) {
				if (err) throw err;
				var blogInfo = Object.values(JSON.parse(JSON.stringify(result)));
				res.json(blogInfo);
				con.end();
			});
		});

	} catch (err) {
		res.status(500).json({ msg: err.message });
	}
});

router.put("/update", imageUpload.single('img'), async (req, res, next) => {
	

	con = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "",
		database: "mandhira"
	});
	con.connect();

	const { title, ref_url, content, id } = req.body;
	const url = req.protocol + '://' + req.get('host') + '/uploads/';
	const img_url = url + req.file.filename;

	sql = `UPDATE blog SET title = '${title}', ref_url = '${ref_url}', content = '${content}', img_url = '${img_url}' WHERE id = ${id}`;
	con.query(sql, function (err, result) {
		if (err) throw err;
		res.json({status: 200});
	});
	con.end();
});

router.put('/update_noimg', async (req, res) => {

	const { title, ref_url, content, id } = req.body;

	con = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "",
		database: "mandhira"
	});

	sql = `UPDATE blog SET title = '${title}', ref_url = '${ref_url}', content = '${content}' WHERE id = ${id}`;
	con.query(sql, function (err, result) {
		if (err) throw err;
		res.json({status: 200});
	});
	con.end();
});

module.exports = router;