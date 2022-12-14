'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Funcionarios', [
        {
          nome: "Carlos Carlos",
          profissao: "Desenvolvedor",
          DTNascimento: "1980-01-01",
          DTContrato: "2000-01-01",
          estadoCivil: "Casado",
          possuiDepend: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      
        {
          nome: "Carla Carla",
          profissao: "Arquiteta",
          DTNascimento: "1970-12-12",
          DTContrato: "1990-12-12",
          estadoCivil: "Divorciada",
          possuiDepend: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          nome: "Pedro Rocha",
          profissao: "QA",
          DTNascimento: "1980-01-01",
          DTContrato: "2000-01-01",
          estadoCivil: "Casado",
          possuiDepend: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          nome: "Ana Maria",
          profissao: "Médica",
          DTNascimento: "2000-01-01",
          DTContrato: "2018-07-20",
          estadoCivil: "Casada",
          possuiDepend: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Funcionarios', null, {});

  }
};
