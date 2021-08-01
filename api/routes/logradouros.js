const {Router} = require('express')
const router = Router();
const logradouroTipoController = require('../controllers/LogradouroTipoController')
const logradouroController = require('../controllers/LogradouroController')
router.post('/logradourosTipos', (req, res)=>{
    logradouroTipoController.criaLogradouroTipo(req, res)
})

router.post('/logradouro', (req, res)=>{
    logradouroController.criaLogradouro(req, res)
})

module.exports = router;