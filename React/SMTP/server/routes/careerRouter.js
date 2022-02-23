const router = require("express").Router();
const nodemailer = require("nodemailer");
const {credentials} = require('../middleware/credentials.js');

router.post("/create", async (req, res) => {
	try {

		let { firstName, lastName, email, phone, sort, resume } = req.body;
		console.log(req.body);

		const { user, pass, host, port, from, to } = credentials;

		let transporter = nodemailer.createTransport({
			host: host,
			port: port,
		    secure: false, // true for 465, false for other ports    
		    auth: {
		    	user: user,
		    	pass: pass,
		    },
		});

		const body = `
		<!DOCTYPE html>
		<html lang="en">
		  <head>
		    <meta charset="UTF-8">
		    <meta name="viewport" content="width=device-width, initial-scale=1.0">
		    <meta http-equiv="X-UA-Compatible" content="ie=edge">
		    <title>Contact Us</title>
		  </head>
		  <body>
		  <p>${firstName}&nbsp;&nbsp;${lastName}<p>
		  <p>${phone}<p>
		  <p>${email}<p>
		  <p>${sort}<p>
		  <p>${resume}<p>
		  </body>
		</html>
		  `;
	    // send mail with defined transport object
	    let info = await transporter.sendMail({
	    	from: from,
	      	to: to, // list of receivers
	      	subject: 'Career', // Subject line
	      	html: body, // html body
	  	},
	  	function (err, result) {
	    	if (err) console.log(err);
	    	else {
	      		res.json({status: 200});
	    	}
	  	});

	} catch (err) {

	}
});


module.exports = router;