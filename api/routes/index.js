const bodyParser = require('body-parser');
const funcionarios = require('./funcionariosRoutes')
const conjuges = require('./conjugesRoutes')
const dependentes = require('./dependentesRoutes')

module.exports = app => {
    app.use(
        bodyParser.json(),
        funcionarios,
        conjuges,
        dependentes
    )
}