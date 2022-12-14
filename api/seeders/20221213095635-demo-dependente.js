'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Dependentes', [
        {
          id_func: 1,
          nome: "Filho 1 - Funcionário 1",
          DTNascto: "2021-01-01",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_func: 1,
          nome: "Filho 2 - Funcionário 1",
          DTNascto: "2022-01-01",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_func: 2,
          nome: "Filho 1 - Funcionário 2",
          DTNascto: "2022-01-01",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_func: 3,
          nome: "Filho 1 - Funcionário 3",
          DTNascto: "2022-01-01",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_func: 9,
          nome: "Filho 1 - Funcionário 9",
          DTNascto: "2022-01-01",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_func: 9,
          nome: "Filho 2 - Funcionário 9",
          DTNascto: "2022-01-01",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_func: 9,
          nome: "Filho 3 - Funcionário 9",
          DTNascto: "2022-01-01",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
