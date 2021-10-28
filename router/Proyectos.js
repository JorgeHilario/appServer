const {Router} = require('express');
const { nuevoProyecto, mostrarProyectos } = require('../controller/projectController');

const router = Router();


router.post('/nuevo', nuevoProyecto);

router.get('/', mostrarProyectos);

module.exports = router;