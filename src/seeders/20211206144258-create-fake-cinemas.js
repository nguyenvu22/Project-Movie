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
      "Cinemas",                                    //Xài bên migrate
      [
        {
          id: 1,
          name: "BDH 3/2",
          address: "159 đường 3/2 quận 10 tphcm",
          image: "hinh rap",
          cineplexId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "BDH Cao Thắng",
          address: "102 đường cao thắng quận 3 tphcm",
          image: "hinh rap",
          cineplexId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: "CGV Phạm Ngũ Lão",
          address: "79 đường phạm ngũ lão quận 1 tphcm",
          image: "hinh rap",
          cineplexId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          name: "Galaxy Nguyễn Hồng Đào",
          address: "79 đường phạm văn chiêu quận 1 tphcm",
          image: "hinh rap",
          cineplexId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          name: "Lotte Cinema Quang Trung",
          address: "79 đường phạm năm lão quận 1 tphcm",
          image: "hinh rap",
          cineplexId: 2,
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
     await queryInterface.bulkDelete("Cinemas", null, {});
  },
};
