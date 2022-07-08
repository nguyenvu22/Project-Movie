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
      "Movies", //Tên table
      [
        {
          id: 1,
          name: "Iron Man 2",
          alias: "Iron Man 2",
          poster: "Link hinh",
          trailer: "link video",
          duration: "180",
          description: "ok",
          comingDate: "2021-11-19",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "Super Man",
          alias: "Iron Man",
          poster: "Link hinh",
          trailer: "link video",
          duration: "180",
          description: "ok",
          comingDate: "2022-5-7",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: "Spider Man - No Way Home",
          alias: "Jon Watts",
          poster:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fthichxemphim.net%2Fnguoi-nhen-khong-con-nha-spider-man-no-way-home&psig=AOvVaw0aALsJF_hAfHL0HJo1vgLY&ust=1642080802623000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIj7jOmprPUCFQAAAAAdAAAAABAD",
          trailer: "https://www.youtube.com/watch?v=JfVOs4VSpmA",
          duration: "160",
          description:
            "Người Nhện: Không Còn Nhà - Spider-Man: No Way Home tiếp nối câu chuyện ở những phần phim trước, khi giờ đây siêu anh hùng người nhện là Peter Parker đã bị bại lộ ra danh tính thật sự của mình cho cả thế giới biết, tất cả đều do Mysterio thực hiện. Giờ đây Peter phải đối mặt với vô số nguy hiểm không những thế còn phải bảo vệ những người thân của mình. Vì không thể nào chống đỡ nổi, Peter Parker đã tìm đến Doctor Strange xin sự trợ giúp. Nhưng mọi chuyện ngày càng đi xa và rắc rối hơn, giờ đây Peter phải cố gắng khám phá ra được ý nghĩa thật sự của bản thân khi trở thành một siêu anh hùng",
          comingDate: "2021-10-11",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          name: "End Game",
          alias: "Mavel",
          poster:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fthichxemphim.net%2Fnguoi-nhen-khong-con-nha-spider-man-no-way-home&psig=AOvVaw0aALsJF_hAfHL0HJo1vgLY&ust=1642080802623000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIj7jOmprPUCFQAAAAAdAAAAABAD",
          trailer: "https://www.youtube.com/watch?v=JfVOs4VSpmA",
          duration: "150",
          description:
            "Người Nhện: Không Còn Nhà - Spider-Man: No Way Home tiếp nối câu chuyện ở những phần phim trước, khi giờ đây siêu anh hùng người nhện là Peter Parker đã bị bại lộ ra danh tính thật sự của mình cho cả thế giới biết, tất cả đều do Mysterio thực hiện. Giờ đây Peter phải đối mặt với vô số nguy hiểm không những thế còn phải bảo vệ những người thân của mình. Vì không thể nào chống đỡ nổi, Peter Parker đã tìm đến Doctor Strange xin sự trợ giúp. Nhưng mọi chuyện ngày càng đi xa và rắc rối hơn, giờ đây Peter phải cố gắng khám phá ra được ý nghĩa thật sự của bản thân khi trở thành một siêu anh hùng",
          comingDate: "2022-7-11",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          name: "Infinity War",
          alias: "Jon Watts",
          poster:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fthichxemphim.net%2Fnguoi-nhen-khong-con-nha-spider-man-no-way-home&psig=AOvVaw0aALsJF_hAfHL0HJo1vgLY&ust=1642080802623000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIj7jOmprPUCFQAAAAAdAAAAABAD",
          trailer: "https://www.youtube.com/watch?v=JfVOs4VSpmA",
          duration: "150",
          description:
            "Người Nhện: Không Còn Nhà - Spider-Man: No Way Home tiếp nối câu chuyện ở những phần phim trước, khi giờ đây siêu anh hùng người nhện là Peter Parker đã bị bại lộ ra danh tính thật sự của mình cho cả thế giới biết, tất cả đều do Mysterio thực hiện. Giờ đây Peter phải đối mặt với vô số nguy hiểm không những thế còn phải bảo vệ những người thân của mình. Vì không thể nào chống đỡ nổi, Peter Parker đã tìm đến Doctor Strange xin sự trợ giúp. Nhưng mọi chuyện ngày càng đi xa và rắc rối hơn, giờ đây Peter phải cố gắng khám phá ra được ý nghĩa thật sự của bản thân khi trở thành một siêu anh hùng",
          comingDate: "2021-12-11",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          name: "The Avenger",
          alias: "Mavel",
          poster:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fthichxemphim.net%2Fnguoi-nhen-khong-con-nha-spider-man-no-way-home&psig=AOvVaw0aALsJF_hAfHL0HJo1vgLY&ust=1642080802623000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIj7jOmprPUCFQAAAAAdAAAAABAD",
          trailer: "https://www.youtube.com/watch?v=JfVOs4VSpmA",
          duration: "150",
          description:
            "Người Nhện: Không Còn Nhà - Spider-Man: No Way Home tiếp nối câu chuyện ở những phần phim trước, khi giờ đây siêu anh hùng người nhện là Peter Parker đã bị bại lộ ra danh tính thật sự của mình cho cả thế giới biết, tất cả đều do Mysterio thực hiện. Giờ đây Peter phải đối mặt với vô số nguy hiểm không những thế còn phải bảo vệ những người thân của mình. Vì không thể nào chống đỡ nổi, Peter Parker đã tìm đến Doctor Strange xin sự trợ giúp. Nhưng mọi chuyện ngày càng đi xa và rắc rối hơn, giờ đây Peter phải cố gắng khám phá ra được ý nghĩa thật sự của bản thân khi trở thành một siêu anh hùng",
          comingDate: "2021-09-11",
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
    await queryInterface.bulkDelete("Movies", null, {});
  },
};
