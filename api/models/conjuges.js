'use strict';
module.exports = (sequelize, DataTypes) => {
  const Conjuges = sequelize.define('Conjuges', {
    nome: DataTypes.STRING,
    profissao: DataTypes.STRING,
    DTNascto: DataTypes.STRING
  }, {});
  Conjuges.associate = function(models) {
    Conjuges.belongsTo(models.Funcionarios,  {
      foreignKey : 'id_func'
    })
    
  };
  return Conjuges;
};