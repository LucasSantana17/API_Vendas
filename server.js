const http = require('http');
require('dotenv').config();
const app = require('./src/Controller/app')
const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

const serverRodando =_=>{console.log(`Server Rodando...
Porta = ${PORT}`)}

server.listen(PORT, serverRodando);
// metodo de rodar o servidor passando a porta e uma função de  comfirmação 