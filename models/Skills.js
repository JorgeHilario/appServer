const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const skillsSchema = new Schema({

    nombre:{
        type: String,
        required: true
    },
    completado:{
        type: Boolean,
        default: false
    },
    proyecto:{
        type: Schema.Types.ObjectId,
        reference: 'Project',
        required: true
    }
    

});


module.exports = mongoose.model('Skill', skillsSchema);