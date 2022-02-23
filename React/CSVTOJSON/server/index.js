const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { join } = require('path');
// set up express

const app = express();
app.use(express.json());
app.use(cors());
const CSVToJSON = require('csvtojson');
const fs = require('fs');
const csvUpload = require('./middleware/csvUpload');

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(join(__dirname, 'build')));
    app.all('/', (req, res) =>
        res.sendFile(join(__dirname, 'build', 'index.html'))
    );
}

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));

app.use("/csv/upload", csvUpload.single('csv'), async (req, res, next) => {
  try {
    
    const csv_name = req.file.filename;
    const json_name = csv_name.split('.')[0] + '.json';
    const url = req.protocol + '://' + req.get('host') + '/uploads/';
    
    CSVToJSON().fromFile(`./uploads/${csv_name}`)
        .then(users => {
            // users is a JSON array
            fs.writeFile(`./uploads/${json_name}`, JSON.stringify(users, null, 4), (err) => {
              if (err) {
                  throw err;
              }
              const json_url = url + json_name;
              res.json({url: json_url});
              console.log("JSON array is saved.");
          });
        }).catch(err => {
            // log error if any
            console.log(err);
        });

  } catch (err) {
    res.json({status: 500});
  }
});

// set up routes
app.use('/uploads', express.static('./uploads'));
