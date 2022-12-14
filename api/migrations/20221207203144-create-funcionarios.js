'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Funcionarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      profissao: {
        type: Sequelize.STRING
      },
      DTNascimento: {
        type: Sequelize.STRING
      },
      DTContrato: {
        type: Sequelize.STRING
      },
      estadoCivil: {
        type: Sequelize.STRING
      },
      possuiDepend: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Funcionarios');
  }
};