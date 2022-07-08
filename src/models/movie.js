"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Cinema_movie, Ticket }) {
      this.hasMany(Cinema_movie, {
        foreignKey: "movieId",
      }),
        this.hasMany(Ticket, {
          foreignKey: "movieId",
        });
    }
  }
  Movie.init(
    {
      name: DataTypes.STRING,
      alias: {
        type: DataTypes.STRING,
        defaultValue: "None"
      },
      poster: {
        type: DataTypes.STRING,
        defaultValue: "Link hình"
      },
      trailer: {
        type: DataTypes.STRING,
        defaultValue: "Link video",
      },
      duration: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      comingDate: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Movie",
    }
  );
  return Movie;
};
