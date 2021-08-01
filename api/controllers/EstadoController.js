const database = require('../models/index')

class EstadoController {
    async criaEstado(req, res) {
        try {
            const estado = req.body;
            await database.Estados.create(estado);
            res.send('200', 'Estado Criado com Sucesso')
        }catch(error){
            res.send('500', error.message)
        }
    }
}

module.exports = new EstadoController();