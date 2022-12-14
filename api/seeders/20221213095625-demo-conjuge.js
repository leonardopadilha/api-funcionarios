"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Conjuges', [
      {
        id_func: 1,
        nome: "Maria Maria",
        profissao: "QA",
        DTNascto: "1980-01-01",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_func: 3,
        nome: "Ana Ana",
        profissao: "Desenvolvedor",
        DTNascto: "1980-01-01",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_func: 4,
        nome: "João João",
        profissao: "Mestre de obras",
        DTNascto: "1980-01-01",
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
  },
};
