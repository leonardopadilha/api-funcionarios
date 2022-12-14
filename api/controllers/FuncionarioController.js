const database = require('../models');

class FuncionarioController {
    static async pegaTodosFuncionarios(req, res) {
        try {
            const todosFuncionarios = await database.Funcionarios.findAll();
            return res.status(200).json(todosFuncionarios);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    
    static async pegaFuncionarioPorId(req, res) {
        const { id } = req.params;
        
        try {
            const funcionarioId = await database.Funcionarios.findOne({
                where : {
                    id: Number(id)
                }
            })
            return res.status(200).json(funcionarioId);
        } catch(error) {
            return res.status(500).json(error.message);
        }
    }

    static async retornaFuncionariosEstadoCivil(req, res) {
        const { situacaoCivil } = req.params;
     
        try {
            const funcionario_situacao_civil = await database.Funcionarios.findAll({
                where: {
                    estadoCivil: situacaoCivil
                }
            })
            return res.status(200).json(funcionario_situacao_civil);
        } catch(error) {
            return res.status(500).json(error.message);
        }
    }

    static async alteraInfoFuncionarios(req, res) {
        const { id } = req.params;
        const novasInfos = req.body;

        try {
            await database.Funcionarios.update(novasInfos, {
                where : {
                    id: Number(id)
                }
            })

            const funcAtualizado = await database.Funcionarios.findOne({
                where : {
                    id: Number(id)
                }
            })

            return res.status(201).json(funcAtualizado);

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async criaFuncionarios(req, res) {
        const novoFuncionario = req.body;

        try {
            const novoFuncionarioCriado = await database.Funcionarios.create(novoFuncionario)
            return res.status(201).json(novoFuncionarioCriado)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async criaVariosFuncionarios(req, res) {
        try {
            const novosFuncionariosCriados = await database.Funcionarios.bulkCreate(req.body)
            return res.status(201).json(novosFuncionariosCriados);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deletaFuncionario(req, res) {
        const { id } = req.params;

        try {
            await database.Funcionarios.destroy({
                where : {
                    id : Number(id)
                }
            })
            return res.status(200).json({mensagem: `id ${id} deletado com sucesso!`});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deletarFuncionariosEmMassa(req, res) {
        try {
            await database.Funcionarios.destroy({
                where : {
                    id : req.body.id
                }
            })
            return res.status(200).json({mensagem : `Funcionários deletados com sucesso`});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    //Join
    //http://localhost:3000/funcionarios/:funcionarioId/conjuges/:conjugeId
    static async pegaUmConjuge(req, res) {
        const { funcionarioId, conjugeId } = req.params;
        try {
            const conjugeFuncionario = await database.Conjuges.findOne({
                where : {
                    id : Number(conjugeId),
                    id_func: Number(funcionarioId)
                },
                include : {
                    model : database.Funcionarios,
                    required : true,
                    attributes : ['nome', 'profissao', 'DTContrato']
                }
            })
            return res.status(200).json(conjugeFuncionario);
        } catch (error) {
            return res.status(422).json(error.mensagem)
        }
    }
}

module.exports = FuncionarioController;