const database = require('../models/index')

class Endereco{
    async criaEndereco(req, res){
        try {
            let endereco =  req.body
            await database.Enderecos.create(endereco)
            res.status(200).send('Endereco criado com sucesso')
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
}

module.exports = new Endereco()