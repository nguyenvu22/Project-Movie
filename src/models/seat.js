'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Showtime }) {
      this.belongsTo(Showtime, {
        foreignKey: "showtimeId"
      })
    }
  };
  Seat.init({
    name: DataTypes.STRING,
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    price: DataTypes.INTEGER,
    type: {
      type: DataTypes.STRING,
      defaultValue: "COMMON",
    },
    showtimeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};