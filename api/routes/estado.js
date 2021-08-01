const {Router} = require('express');
const router = Router();
const estadoController = require('../controllers/EstadoController')

router.post('/estado', (req, res)=>{
    estadoController.criaEstado(req, res)
})

module.exports = router