const database = require('../models/index')

class Bairro {
    async criaBairro(req, res) {
        try {
            let bairros = req.body
            await database.Bairros.create(bairros)
            res.status(200).send('Bairro criado com sucesso');
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
}

module.exports = new Bairro()