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
      "Users",
      [
        {
          id: 1,
          name: "Huy Đoàn",
          email: "connonngungoc@gmail.com",
          password: "123456",
          phone: "0909563183",
          role: "ADMIN",
          avatar: "link hinh",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "Tiên",
          email: "bemeodth@gmail.com",
          password: "123456",
          phone: "0909563183",
          role: "ADMIN",
          avatar: "link hinh",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: "Vũ Ngu",
          email: "vupro@gmail.com",
          password: "123456",
          phone: "0909563183",
          role: "CLIENT",
          avatar: "link hinh",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          name: "Tùng giới tính",
          email: "conheongungoc@gmail.com",
          password: "123456",
          phone: "0909563183",
          role: "CLIENT",
          avatar: "link hinh",
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
     await queryInterface.bulkDelete('Users', null, {});
  }
};
