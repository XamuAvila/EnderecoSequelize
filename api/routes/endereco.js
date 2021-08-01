const {Router} = require('express')
const router = Router()
const EnderecoController = require('../controllers/EnderecoController')
router.post('/endereco', (req, res)=>{
    EnderecoController.criaEndereco(req, res)
})

module.exports = router