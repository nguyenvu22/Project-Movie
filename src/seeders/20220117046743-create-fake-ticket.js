'use strict';

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
      "Tickets",
      [
        {
          id:1,
          userId: 1,
          movieId:2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id:2,
          userId: 2,
          movieId:4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id:3,
          userId: 3,
          movieId:2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id:4,
          userId: 4,
          movieId:2,
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
     await queryInterface.bulkDelete('Tickets', null, {});
  }
};
