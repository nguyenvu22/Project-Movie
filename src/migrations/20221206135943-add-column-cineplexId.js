'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.addColumn('Cinemas', "cineplexId", {
       type: Sequelize.INTEGER,
       references: {
         model: "Cineplexes",          //tham chiếu đến table ...
         key: "id"                     //khoa chính của table tham chiếu
       }
     });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.removeColumn("Cinemas", "cineplexId");
  }
};
