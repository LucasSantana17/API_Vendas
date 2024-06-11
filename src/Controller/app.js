const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const routes_cliente = require('./routes_cliente');
const routes_pedidos = require('./routes_pedidos');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes_cliente);
app.use(routes_pedidos);

module.exports = app;
