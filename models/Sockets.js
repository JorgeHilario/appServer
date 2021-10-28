const { nuevoProyecto, nuevaSkill } = require("../controller/socketController");



class Sockets {

    constructor(io){

        this.io = io;

        this.socketEvents();
    }

    socketEvents(){
        //ON CONNECTION
        this.io.on('connection', (socket) => {

            console.log('SE CONECTO UN SOCKET', socket.id)

            socket.on('nuevo-proyecto', async (data)=>{

                const project = await nuevoProyecto(data);
                
                this.io.emit('nuevo-proyecto', project);
            })


            socket.on('nueva-skill', async (data)=>{

                const skill = await nuevaSkill(data);

                this.io.emit('nueva-skill', skill);
            })

            socket.on('disconnect', ()=>{
                console.log('User Disconnected');
            })
           

        })
    }
}


module.exports = Sockets;