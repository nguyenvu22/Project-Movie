'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cineplex extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    //Qh 1
    static associate({ Cinema }) {
      // define association here
      this.hasMany( Cinema, {
        foreignKey: "cineplexId",             //Key mà 2 tk lk
      } )
    }
  };
  Cineplex.init({
    name: DataTypes.STRING,
    logo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cineplex',
  });
  return Cineplex;
};