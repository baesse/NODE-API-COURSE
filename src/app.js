const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose')
const app = express();
const router = express.Router();

//connecta ao banco
mongoose.connect('mongodb://igorbaesse:root123@ds030817.mlab.com:30817/node_store_qaz',{ useNewUrlParser: true })

//carregar models
const Product = require('./models/product')
//carregar rotas
const indexRoute = require('./routes/index')
const productRoute = require('./routes/product')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", indexRoute);
app.use("/products", productRoute);
module.exports = app;
