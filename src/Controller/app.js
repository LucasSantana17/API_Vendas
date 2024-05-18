const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

module.exports = app;
