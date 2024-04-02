//Importar paquetes
require('dotenv').config() //Dependencia para vincular variables de entorno

//Importar clases o archivos necesarios
const {Server} = require('./models/server')

const server = new Server()//Creando instancia

server.listen()