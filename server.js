const http = require('http');
require('dotenv').config();
const app = require('./src/Controller/app')
const PORT = process.env.PORT;


const server = http.createServer(app);
const serverRodando =_=>{console.log(`Server Rodando...
Porta = ${PORT}`)}
server.listen(serverRodando);
