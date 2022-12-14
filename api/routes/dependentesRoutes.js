const { Router } = require('express');
const DependenteController = require('../controllers/DependenteController');

const router = Router();

router
    .get('/dependentes', DependenteController.pegaTodosDependentes)

module.exports = router;