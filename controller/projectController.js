const Project = require("../models/Project");


nuevoProyecto = async (req, res) => {

    const {body} = req;

    const proyecto = new Project(body);

    await proyecto.save();

    res.status(201).json({
        proyecto
    })
 
}

mostrarProyectos = async (req, res) => {

    const proyectos = await Project.find();

    res.status(200).json({
        proyectos
    })

}

module.exports = {
    nuevoProyecto,
    mostrarProyectos
}