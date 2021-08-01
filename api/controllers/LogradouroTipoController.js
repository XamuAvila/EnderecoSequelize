const database = require('../models/index')

class LogradouroTipo{
    async criaLogradouroTipo(req, res){
        try {
            let logradouroTipo = req.body;
            await database.LogradourosTipos.create(logradouroTipo);
            res.status(200).send('Tipo de logradouro criado com sucesso')
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
}

module.exports = new LogradouroTipo()