const router = require("express").Router();
var mysql = require('mysql');
const imageUpload = require('../middleware/imageUpload');
var con;

router.post("/create", imageUpload.array('imagesArray', 8), async (req, res) => {
	try {
		const name = req.body.catName;
		con = mysql.createConnection({
			host: "localhost",
			user: "root",
			password: "",
			database: "mandhira"
		});

		con.connect();

		const url = req.protocol + '://' + req.get('host') + '/uploads/';
	  	const imgUrl = url + req.files[0].filename;
	  	const pdfUrl = url + req.files[1].filename;
		// Check if new category already exist at database.
		var sql = `SELECT * FROM category WHERE name = '${name}'`; 
		await con.query(sql, function (err, result) {
			if (err) throw err;
			var cnt = Object.values(JSON.parse(JSON.stringify(result)));
			if (cnt.length) {
				res.json({status: 'exist'});
				return;
			}
			else {
				var sql = `INSERT INTO category (name, img_url, pdf_url) VALUES ('${name}', '${imgUrl}', '${pdfUrl}')`;
				con.query(sql, function (err, result) {
					if (err) throw err;
					res.json({status: 200});
				});
				con.end();
			}
		});
	} catch (err) {
		res.status(500).json({ msg: err.message });
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
	var sql = "SELECT * FROM category";
	con.query(sql, async function (err, result, fields) {
		if (err) throw err;
		var catAll = Object.values(JSON.parse(JSON.stringify(result)));
		var catMaps = [];
		await Promise.all(catAll.map( async (cat, index) => {
			var catMap = [];
			catMap = {
				id: cat.id,
				name: cat.name,
				index: index,
				img_url: cat.img_url,
				pdf_url: cat.pdf_url,
			};
			catMaps.push(catMap);
		}));
		res.json(catMaps);
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

	// Check if deleted category has sub category.
	var sql = `SELECT * FROM sub_category WHERE cat_id = ${delId}`;

	con.query(sql, function (err, result) {
		if (err) throw err;
		var cnt = Object.values(JSON.parse(JSON.stringify(result)));
		
		if (!cnt.length) {
			var sql = `DELETE FROM category WHERE id = ${delId}`;
			con.query(sql, function (err, result) {
				if (err) throw err;
			});

			var sql = "SELECT * FROM category";
			con.query(sql, async function (err, result, fields) {
				if (err) throw res.status(500).json({ msg: err.message });
				// success
				var catAll = Object.values(JSON.parse(JSON.stringify(result)));
				var catMaps = [];
				await Promise.all(catAll.map( async (cat, index) => {
					var catMap = [];
					catMap = {
						id: cat.id,
						name: cat.name,
						index: index,
						img_url: cat.img_url,
						pdf_url: cat.pdf_url,
					};
					catMaps.push(catMap);
				}));
				
				res.status(200).json({ 
					msg: 'success',
					cat: catMaps
				});
			});
		} else {
			res.status(200).json({ 
				msg: 'sub_exist'
			});
		}
		con.end();
	}); 
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

		var sql = `SELECT * FROM category WHERE id = ${editId}`; 

		con.connect(function(err) {
			if (err) throw err;
			con.query(sql, function (err, result) {
				if (err) throw err;
				var catInfo = Object.values(JSON.parse(JSON.stringify(result)));
				res.json(catInfo);
				con.end();
			});
		});

	} catch (err) {
		res.status(500).json({ msg: err.message });
	}
});


router.put('/update', imageUpload.array('imagesArray', 8), async (req, res) => {
	
	con = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "",
		database: "mandhira"
	});
	con.connect();

	const { catId, catName } = req.body;
	const url = req.protocol + '://' + req.get('host') + '/uploads/';
	var imgUrl = '';
	var pdfUrl = '';
	var sql = '';

	if (req.files.length === 2) {
	  	imgUrl = url + req.files[0].filename;
	  	pdfUrl = url + req.files[1].filename;

	  	sql = `UPDATE category SET name = '${catName}', img_url = '${imgUrl}', pdf_url = '${pdfUrl}' WHERE id = ${catId}`;
		con.query(sql, function (err, result) {
			if (err) throw err;
			res.json({status: 200});
		});
		con.end();
	} else if (req.files.length === 1) {
		
		if (req.files[0].mimetype === 'application/pdf') {

			pdfUrl = url + req.files[0].filename;
			sql = `UPDATE category SET name = '${catName}', pdf_url = '${pdfUrl}' WHERE id = ${catId}`;
			con.query(sql, function (err, result) {
				if (err) throw err;
				res.json({status: 200});
			});
			con.end();

		} else {

			imgUrl = url + req.files[0].filename;
			sql = `UPDATE category SET name = '${catName}', img_url = '${imgUrl}' WHERE id = ${catId}`;
			con.query(sql, function (err, result) {
				if (err) throw err;
				res.json({status: 200});
			});
			con.end();
		}

	} else {

		sql = `UPDATE category SET name = '${catName}' WHERE id = ${catId}`;
		con.query(sql, function (err, result) {
			if (err) throw err;
			res.json({status: 200});
		});
		con.end();
	}

});

module.exports = router;