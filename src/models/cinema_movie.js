'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cinema_movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Cinema, Movie }) {
      this.belongsTo( Cinema, {
        foreignKey: "cinemaId"
      }),
      this.belongsTo( Movie, {
        foreignKey: "movieId"
      })
    }
  };
  Cinema_movie.init({
    movieId: DataTypes.INTEGER,
    cinemaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cinema_movie',
  });
  return Cinema_movie;
};