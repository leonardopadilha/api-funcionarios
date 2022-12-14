'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Conjuges', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_func: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Funcionarios',
          key: 'id'
        }
      },
      nome: {
        type: Sequelize.STRING
      },
      profissao: {
        type: Sequelize.STRING
      },
      DTNascto: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Conjuges');
  }
};