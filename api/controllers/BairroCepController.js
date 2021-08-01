const database = require('../models/index')

class BairroCep{
    async criaBairroCep(req, res){
        try{
            let bairroCep = req.body
            await database.BairrosCep.create(bairroCep)
            res.status(200).send("Bairro cep criado com sucesso")
        }catch(error){
            res.status(500).send(error.message)
        }
    }
}

module.exports = new BairroCep()