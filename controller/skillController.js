const Skills = require("../models/Skills");



nuevaSkill = async (req, res) => {

    const {body} = req;

    const skill = new Skills(body);

    await skill.save();

    res.status(201).json({
        skill
    })
    
}


mostrarSkills = async (req, res) => {

    // const {id} = req.params;

    // const query = {'proyecto':id}

    const skills = await Skills.find()

    res.status(200).json({
        skills
    })

}


module.exports = {
    mostrarSkills,
    nuevaSkill
}