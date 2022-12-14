const { Router } = require('express');
const FuncionarioController = require('../controllers/FuncionarioController');

const router = Router();

router
    .get('/funcionarios', FuncionarioController.pegaTodosFuncionarios)
    .get('/funcionarios/:id', FuncionarioController.pegaFuncionarioPorId)
    .get("/funcionarios/estadocivil/:situacaoCivil", FuncionarioController.retornaFuncionariosEstadoCivil)
    .get('/funcionarios/:funcionarioId/conjuges/:conjugeId', FuncionarioController.pegaUmConjuge)
    .put('/funcionarios/:id', FuncionarioController.alteraInfoFuncionarios)
    .post('/funcionarios', FuncionarioController.criaVariosFuncionarios)
    .post('/funcionarios', FuncionarioController.criaFuncionarios)
    .delete('/funcionarios/:id', FuncionarioController.deletaFuncionario)
    .delete('/funcionarios', FuncionarioController.deletarFuncionariosEmMassa)

module.exports = router;