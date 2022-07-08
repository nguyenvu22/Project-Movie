"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cinema extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    //Qh nhiều
    static associate({ Cineplex, Showtime, Cinema_movie }) {
      // define association here
      this.belongsTo(Cineplex, {
        foreignKey: "cineplexId", //Key mà 2 tk lk
      }),
        this.hasMany(Showtime, {
          foreignKey: "cinemaId",
        }),
        this.hasMany(Cinema_movie, {
          foreignKey: "cinemaId",
        });
    }
  }
  Cinema.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      image: { 
        type: DataTypes.STRING,
        defaultValue: "Link hình"
      },
      cineplexId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Cinema",
    }
  );
  return Cinema;
};
