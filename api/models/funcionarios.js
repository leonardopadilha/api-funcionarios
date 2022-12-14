'use strict';
module.exports = (sequelize, DataTypes) => {
  const Funcionarios = sequelize.define('Funcionarios', {
    nome: DataTypes.STRING,
    profissao: DataTypes.STRING,
    DTNascimento: DataTypes.STRING,
    DTContrato: DataTypes.STRING,
    estadoCivil: DataTypes.STRING,
    possuiDepend: DataTypes.BOOLEAN
  }, {});
  Funcionarios.associate = function(models) {
    Funcionarios.hasOne(models.Conjuges, {
      foreignKey : 'id_func'
    })

    Funcionarios.hasMany(models.Dependentes, {
      foreignKey: 'id_func'
    })
  };
  return Funcionarios;
};