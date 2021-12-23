const router = require("express").Router();
const imageUpload = require('../middleware/imageUpload');
var mysql = require('mysql');
var con;

router.post("/create", imageUpload.array('imagesArray', 8), async (req, res, next) => {
  try {

  	con = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "",
		database: "mandhira"
	});
	con.connect();

  	const { catId, subCat } = req.body;
    const url = req.protocol + '://' + req.get('host') + '/uploads/';
  	const imgUrl = url + req.files[0].filename;
  	const pdfUrl = url + req.files[1].filename;

  	// Check if new category already exist at database.
	var sql = `SELECT * FROM sub_category WHERE name = '${subCat}'`; 
	await con.query(sql, function (err, result) {
		if (err) throw err;
		var cnt = Object.values(JSON.parse(JSON.stringify(result)));
		if (cnt.length) {
			res.json({status: 'exist'});
			return;
		}
		else {
			var sql = `INSERT INTO sub_category (name, cat_id,  img_url, pdf_url) VALUES ('${subCat}', ${catId}, '${imgUrl}', '${pdfUrl}')`;
			
			con.query(sql, function (err, result) {
				if (err) throw err;
				res.json({status: 200});
			});
			con.end();
		}
	});

  } catch (err) {
    
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
	var sql = "SELECT * FROM sub_category";
	con.query(sql, async function (err, result, fields) {
		if (err) throw err;
		var subAll = Object.values(JSON.parse(JSON.stringify(result)));
		var subMaps = [];
		await Promise.all(subAll.map( async (sub, index) => {
			var subMap = [];
			subMap = {
				id: sub.id,
				index: index,
				cat_id: sub.cat_id,
				name: sub.name,
				img_url: sub.img_url,
				pdf_url: sub.pdf_url,
			};
			subMaps.push(subMap);
		}));
		res.json(subMaps);
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

	// Check if deleted subcategory has product.
	var sql = `SELECT * FROM product WHERE sub_id = ${delId}`;

	con.query(sql, function (err, result) {
		if (err) throw err;
		var cnt = Object.values(JSON.parse(JSON.stringify(result)));

		if (!cnt.length) {
			var sql = `DELETE FROM sub_category WHERE id = ${delId}`;
			con.query(sql, function (err, result) {
				if (err) throw err;
			});

			var sql = "SELECT * FROM sub_category";
			con.query(sql, async function (err, result, fields) {
				if (err) throw res.status(500).json({ msg: err.message });
				// success
				var subAll = Object.values(JSON.parse(JSON.stringify(result)));
				var subMaps = [];
				await Promise.all(subAll.map( async (sub, index) => {
					var subMap = [];
					subMap = {
						id: sub.id,
						index: index,
						cat_id: sub.cat_id,
						name: sub.name,
						img_url: sub.img_url,
						pdf_url: sub.pdf_url,
					};
					subMaps.push(subMap);
				}));
				
				res.status(200).json({ 
					msg: 'success',
					sub: subMaps
				});
			});

		} else {
			res.status(200).json({ 
				msg: 'pro_exist'
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

		var sql = `SELECT * FROM sub_category WHERE id = ${editId}`; 

		con.connect(function(err) {
			if (err) throw err;
			con.query(sql, function (err, result) {
				if (err) throw err;
				var subInfo = Object.values(JSON.parse(JSON.stringify(result)));
				res.json(subInfo);
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

	const { catId, subCat, editId } = req.body;
	const url = req.protocol + '://' + req.get('host') + '/uploads/';
	var imgUrl = '';
	var pdfUrl = '';
	var sql = '';

	if (req.files.length === 2) {
	  	imgUrl = url + req.files[0].filename;
	  	pdfUrl = url + req.files[1].filename;

	  	sql = `UPDATE sub_category SET name = '${subCat}', cat_id = ${catId}, img_url = '${imgUrl}', pdf_url = '${pdfUrl}' WHERE id = ${editId}`;
		con.query(sql, function (err, result) {
			if (err) throw err;
			res.json({status: 200});
		});
		con.end();
	} else if (req.files.length === 1) {
		
		if (req.files[0].mimetype === 'application/pdf') {

			pdfUrl = url + req.files[0].filename;
			sql = `UPDATE sub_category SET name = '${subCat}', cat_id = ${catId}, pdf_url = '${pdfUrl}' WHERE id = ${editId}`;
			con.query(sql, function (err, result) {
				if (err) throw err;
				res.json({status: 200});
			});
			con.end();

		} else {

			imgUrl = url + req.files[0].filename;
			sql = `UPDATE sub_category SET name = '${subCat}', cat_id = ${catId}, img_url = '${imgUrl}' WHERE id = ${editId}`;
			con.query(sql, function (err, result) {
				if (err) throw err;
				res.json({status: 200});
			});
			con.end();
		}

	} else {

		sql = `UPDATE sub_category SET name = '${subCat}', cat_id = ${catId} WHERE id = ${editId}`;
		con.query(sql, function (err, result) {
			if (err) throw err;
			res.json({status: 200});
		});
		con.end();
	}

});

module.exports = router;