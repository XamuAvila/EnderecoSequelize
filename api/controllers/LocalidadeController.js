const database = require('../models/index')

class LocalidadeController {
    async criaLocalidade(req, res) {
        try {
            const localidade = req.body;
            await database.Localidades.create(localidade);
            res.send('200', 'Localidade Criada com Sucesso')
        } catch (error) {
            res.send('500', error.message)
        }
    }
}

module.exports = new LocalidadeController();