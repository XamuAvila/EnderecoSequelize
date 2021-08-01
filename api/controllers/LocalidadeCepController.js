const database = require('../models/index')

class LocalidadeCepController {
    async criaLocalidadeCep(req, res) {
        try {
            const localidade_cep = req.body;
            await database.Localidades_cep.create(localidade_cep);
            res.send('200', 'Localidade-Cep Criada com Sucesso')
        } catch (error) {
            res.send('500', error.message)
        }
    }
}

module.exports = new LocalidadeCepController();