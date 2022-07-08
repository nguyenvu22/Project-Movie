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
      "Seats",
      [
        {
          id: 1,
          name: "T30",
          status: true,
          price: 50,
          type: "VIP",
          showtimeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "H20",
          status: true,
          price: 100,
          type: "VIP",
          showtimeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: "H30",
          status: true,
          price: 90,
          type: "VIP",
          showtimeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          name: "A12",
          status: true,
          price: 50,
          type: "VIP",
          showtimeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          name: "A12",
          status: true,
          price: 30,
          type: "COMMON",
          showtimeId: 1,
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
    await queryInterface.bulkDelete("Seats", null, {});
  },
};
