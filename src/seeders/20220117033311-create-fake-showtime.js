"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
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
      "Showtimes",
      [
        {
          id:1,
          startTime: "2022-10-20",
          cinemaId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id:2,
          startTime: "2022-11-20",
          cinemaId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id:3,
          startTime: "2022-09-20",
          cinemaId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id:4,
          startTime: "2022-10-20",
          cinemaId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id:5,
          startTime: "2022-01-20",
          cinemaId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Showtimes', null, {});
  },
};
