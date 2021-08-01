const database = require('../models/index')

class Logradouro{
    async criaLogradouro(req, res){
        try {
            let logradouro = req.body
            await database.Logradouros.create(logradouro)
            res.status(200).send('Logradouro criado com sucesso')
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
}

module.exports = new Logradouro()