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

  	const { subId, proName } = req.body;
    const url = req.protocol + '://' + req.get('host') + '/uploads/';
  	const imgUrl = url + req.files[0].filename;
  	const pdfUrl = url + req.files[1].filename;

  	// Check if new product already exist at database.
	var sql = `SELECT * FROM product WHERE name = '${proName}'`; 
	await con.query(sql, function (err, result) {
		if (err) throw err;
		var cnt = Object.values(JSON.parse(JSON.stringify(result)));
		if (cnt.length) {
			res.json({status: 'exist'});
			return;
		}
		else {
			var sql = `INSERT INTO product (name, sub_id,  img_url, pdf_url) VALUES ('${proName}', ${subId}, '${imgUrl}', '${pdfUrl}')`;
			
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
	var sql = "SELECT * FROM product";
	con.query(sql, async function (err, result, fields) {
		if (err) throw err;
		var proAll = Object.values(JSON.parse(JSON.stringify(result)));
		var proMaps = [];
		await Promise.all(proAll.map( async (pro, index) => {
			var proMap = [];
			proMap = {
				id: pro.id,
				index: index,
				sub_id: pro.sub_id,
				name: pro.name,
				img_url: pro.img_url,
				pdf_url: pro.pdf_url,
			};
			proMaps.push(proMap);
		}));
		res.json(proMaps);
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
	var sql = `DELETE FROM product WHERE id = ${delId}`;
	con.query(sql, function (err, result) {
		if (err) throw err;
	});

	var sql = "SELECT * FROM product";
	con.query(sql, async function (err, result, fields) {
		if (err) throw res.status(500).json({ msg: err.message });
		// success
		var proAll = Object.values(JSON.parse(JSON.stringify(result)));
		var proMaps = [];
		await Promise.all(proAll.map( async (pro, index) => {
			var proMap = [];
			proMap = {
				id: pro.id,
				index: index,
				sub_id: pro.sub_id,
				name: pro.name,
				img_url: pro.img_url,
				pdf_url: pro.pdf_url,
			};
			proMaps.push(proMap);
		}));
		
		res.status(200).json({ 
			msg: 'success',
			pro: proMaps
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

		var sql = `SELECT * FROM product WHERE id = ${editId}`; 

		con.connect(function(err) {
			if (err) throw err;
			con.query(sql, function (err, result) {
				if (err) throw err;
				var proInfo = Object.values(JSON.parse(JSON.stringify(result)));
				res.json(proInfo);
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

	const { subId, proName, editId } = req.body;
	const url = req.protocol + '://' + req.get('host') + '/uploads/';
	var imgUrl = '';
	var pdfUrl = '';
	var sql = '';

	if (req.files.length === 2) {
	  	imgUrl = url + req.files[0].filename;
	  	pdfUrl = url + req.files[1].filename;

	  	sql = `UPDATE product SET name = '${proName}', sub_id = ${subId}, img_url = '${imgUrl}', pdf_url = '${pdfUrl}' WHERE id = ${editId}`;
		con.query(sql, function (err, result) {
			if (err) throw err;
			res.json({status: 200});
		});
		con.end();
	} else if (req.files.length === 1) {
		
		if (req.files[0].mimetype === 'application/pdf') {

			pdfUrl = url + req.files[0].filename;
			sql = `UPDATE product SET name = '${proName}', sub_id = ${subId}, pdf_url = '${pdfUrl}' WHERE id = ${editId}`;
			con.query(sql, function (err, result) {
				if (err) throw err;
				res.json({status: 200});
			});
			con.end();

		} else {

			imgUrl = url + req.files[0].filename;
			sql = `UPDATE product SET name = '${proName}', sub_id = ${subId}, img_url = '${imgUrl}' WHERE id = ${editId}`;
			con.query(sql, function (err, result) {
				if (err) throw err;
				res.json({status: 200});
			});
			con.end();
		}

	} else {

		sql = `UPDATE product SET name = '${proName}', sub_id = ${subId} WHERE id = ${editId}`;
		con.query(sql, function (err, result) {
			if (err) throw err;
			res.json({status: 200});
		});
		con.end();
	}

});

router.get('/selProList/:id', async (req, res) => {

	var subId = req.params.id
	con = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "",
		database: "mandhira"
	});

	con.connect();
	var sql = `SELECT * FROM product WHERE sub_id = ${subId}`;
	con.query(sql, async function (err, result, fields) {
		if (err) throw err;
		var proAll = Object.values(JSON.parse(JSON.stringify(result)));
		var proMaps = [];
		await Promise.all(proAll.map( async (pro, index) => {
			var proMap = [];
			proMap = {
				id: pro.id,
				index: index,
				cat_id: pro.cat_id,
				name: pro.name,
				img_url: pro.img_url,
				pdf_url: pro.pdf_url,
			};
			proMaps.push(proMap);
		}));
		res.json(proMaps);
	});
	con.end();
});

module.exports = router;