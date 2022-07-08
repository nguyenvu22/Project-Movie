'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  News.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    image: {
      type: DataTypes.STRING,
      defaultValue: "Link hinh"
    }
  }, {
    sequelize,
    modelName: 'News',
  });
  return News;
};