const mongoose = require('mongoose');


const dbConnection = async () => {

    try{

        await mongoose.connect('mongodb+srv://Admin:YbT4hE4MUG2uWYG8@cluster0.fuccn.mongodb.net/projectsDB?retryWrites=true&w=majority',{
            useNewUrlParser: true,
        })

        console.log('DB IS ONLINE')

    }catch(error){
        console.log(error)
        
        throw new Error('Error al conectarse a la base de datos');
    }
}

module.exports = {dbConnection}