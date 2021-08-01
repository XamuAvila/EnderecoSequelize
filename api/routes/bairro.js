const {Router} = require('express')
const router = Router();
const BairroCepController = require('../controllers/BairroCepController')

router.post('/bairro', (req, res)=>{
    BairroController.criaBairro(req, res)
})

router.post('/bairroCep', (req, res)=>{
    BairroCepController.criaBairroCep(req, res)
})

module.exports =  router;