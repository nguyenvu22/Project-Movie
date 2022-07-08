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
      "Cineplexes",                             //Xài bên migrate
      [
        {
          id: 1,
          name: "BHD",
          logo: "https://www.google.com/url?sa=i&url=https%3A%2F",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "CGV",
          logo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.tgdd.vn%2FFiles%",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          name: "Galaxy Cinema",
          logo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.g",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          name: "Lotte Cinema",
          logo: "https://www.google.com/imgres?imgurl=https%3A%",
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
     await queryInterface.bulkDelete('Cineplexes', null, {});
  },
};
