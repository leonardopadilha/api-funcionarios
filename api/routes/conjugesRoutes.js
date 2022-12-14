const { Router } = require('express');
const ConjugeController = require('../controllers/ConjugeController');

const router = Router();

router
    .get('/conjuges', ConjugeController.pegaTodosConjuges)
    .post('/conjuges', ConjugeController.cadastraUmConjuge)
    .put('/conjuges/:id', ConjugeController.atualizaConjuge)
    .delete('/conjuges/:id', ConjugeController.deletaConjuge)

module.exports = router;