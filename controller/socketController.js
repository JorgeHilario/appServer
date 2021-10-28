const Project = require('../models/Project');
const Skill = require('../models/Skills');

nuevoProyecto = async (data) => {

    const query = {'nombre': data}

    const proyecto = new Project(query);
    await proyecto.save();

    return proyecto; 
 
}

nuevaSkill = async (data) =>{

    const skill = new Skill(data)
    await skill.save();

    return skill;

}


module.exports = {
    nuevoProyecto,
    nuevaSkill
}
