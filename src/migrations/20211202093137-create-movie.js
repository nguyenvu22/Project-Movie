'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      alias: {
        type: Sequelize.STRING,
        defaultValue: "None"
      },
      poster: {
        type: Sequelize.STRING,
        defaultValue: "Link hình"
      },
      trailer: {
        type: Sequelize.STRING,
        defaultValue: "Link video"
      },
      duration: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },
      comingDate: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Movies');
  }
};