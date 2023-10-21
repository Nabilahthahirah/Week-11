"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Todos",
      [
        {
          todo: "Check Email",
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          todo: "Check Git",
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          todo: "Debug Code",
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          todo: "Pair Program",
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          todo: "Push Code",
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Todos", null, {});
  },
};
