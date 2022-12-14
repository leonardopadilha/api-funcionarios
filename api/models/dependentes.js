'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dependentes = sequelize.define('Dependentes', {
    nome: DataTypes.STRING,
    DTNascto: DataTypes.STRING
  }, {});
  Dependentes.associate = function(models) {
    Dependentes.belongsTo(models.Funcionarios,  {
      foreignKey : 'id_func'
    })
  };
  return Dependentes;
};