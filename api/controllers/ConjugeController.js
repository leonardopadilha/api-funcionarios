const database = require('../models');

class ConjugeController {
    static async pegaTodosConjuges(req, res) {
        try {
            const todosConjuges = await database.Conjuges.findAll();
            return res.status(200).json(todosConjuges);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async cadastraUmConjuge(req, res) {
        const novoConjuge = req.body;

        try {
            const novoConjugeCadastrado = await database.Conjuges.create(novoConjuge);
            return res.status(201).json(novoConjugeCadastrado);
        } catch (error) {
            return res.status(422).json(error.message);
        }
    }

    static async atualizaConjuge(req, res) {
        const { id } = req.params;
        const conjugeAtualizado = req.body;
        
        try {
            await database.Conjuges.update(conjugeAtualizado, {
                where : {
                    id: Number(id)
                }
            })
            const novoConjugeAtualizado = await database.Conjuges.findByPk(Number(id));
            return res.status(201).json(novoConjugeAtualizado);
        } catch (error) {
            return res.status(422).json(error.message);
        }
    }

    static async deletaConjuge(req, res) {
        const { id } = req.params;

        try {
            await database.Conjuges.destroy({
                where : {
                    id : Number(id)
                }
            })
            return res.status(200).json({messagem: `id ${id} excluído com sucesso!`});
        } catch (error) {
            return res.status(422).json(error.message);
        }
    }
}

module.exports = ConjugeController;