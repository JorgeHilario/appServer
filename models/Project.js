const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const projectSchema = new Schema({

    nombre: {
        type: String,
        required: true
    },

    completado:{
        type: Boolean,
        default: false
    },

    created:{
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('Project', projectSchema);