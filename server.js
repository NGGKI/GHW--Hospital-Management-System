require("dotenv").config;

const express = require("express");
const { join } = require("path");

const app = express();

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./controller'))

// async function init() {
//   await require("./config/connection").sync();
//   app.listen(process.env.PORT || 3001);
// }

// init();

require('./config/connection').sync();