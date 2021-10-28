const express = require('express');
const cors = require('cors');
const http = require('http');
const sockets = require('socket.io');
const { dbConnection } = require('../db/config');
const Sockets = require('./Sockets');

// const app = express();

// const PORT = 8080;

// app.use(cors());

// app.get('/', (req,res)=>{
//     res.send('WELCOME')
// })

// app.listen(PORT,()=>{
//     console.log(`Server conected on port ${8080}`)
// })

class Server {

    constructor(){

        this.app = express();
        this.port = 8080;


        //TODO: Conectar DB
        dbConnection();
        

        //HTTP SERVER
        this.server = http.createServer(this.app);
        
        //TODO: Configurar sockets
        this.io = sockets(this.server, {});

    }

    miMiddlewares(){
        //CORS
        this.app.use(cors());

        //PARSEAR BODY
        this.app.use(express.json());


        //TODO: Enpoints
        this.app.use('/proyecto', require('../router/Proyectos')); 
        this.app.use('/skill', require('../router/Skills'));
    }

    //TODO: Sockets
    configurarSockets(){
        new Sockets(this.io)
    }


    execute(){
        //Inicializar middlewares
        this.miMiddlewares();

        //TODO: inicializar sockets
        this.configurarSockets();

        //Iniciar Server
        this.server.listen(this.port, ()=>{
            console.log(`Server conected on port ${this.port}`)
        })
    }
    
}


module.exports = Server;