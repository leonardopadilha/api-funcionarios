const database = require('../models');

class DependenteController {
    
    static async pegaTodosDependentes(req, res) {
        try {
            const todosDependentes = await database.Dependentes.findAll();
            return res.status(200).json(todosDependentes);
        } catch(error) {
            return res.status(422).json(error.message);
        }
    }
}

module.exports = DependenteController;