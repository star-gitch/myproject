const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { join } = require('path');

// set up express

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(join(__dirname, 'build')));
    app.all('/', (req, res) =>
        res.sendFile(join(__dirname, 'build', 'index.html'))
    );
}

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));

// set up routes
app.use('/uploads', express.static('./uploads'));
app.use("/category", require("./routes/categoryRouter"));
app.use("/subcat", require("./routes/subCatRouter"));
app.use("/blog", require("./routes/blogRouter"));
app.use("/product", require("./routes/productRouter"));
