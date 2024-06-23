const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes_cliente = require('./routes_cliente');
const routes_pedidos = require('./routes_pedidos');
const routes_login = require('./routes_login');
const roteamento = require('./roteamento');


app.use(routes_cliente);
app.use(routes_pedidos);
app.use(routes_login);
app.use(roteamento);

module.exports = app;
