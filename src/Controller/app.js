const express = require('express');
const app = express();
const cors = require('cors')
const bodyparser = require('body-parser');

const routes = require('./routes');

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use(routes);

module.exports = app;
