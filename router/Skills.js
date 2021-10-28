const {Router} = require('express');
const { nuevaSkill, mostrarSkills } = require('../controller/skillController');

const router = Router();




router.post('/nueva', nuevaSkill)

router.get('/mostrar', mostrarSkills)



module.exports = router;