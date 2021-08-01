const { Router } = require('express');
const localidadeController = require('../controllers/LocalidadeController')
const localidadeCepController = require('../controllers/LocalidadeCepController')
const router = Router();

router.post('/localidade', (req, res) => {
    localidadeController.criaLocalidade(req, res)
})

router.post('/localidadeCep', (req, res) => {
    localidadeCepController.criaLocalidadeCep(req, res)
})

module.exports = router