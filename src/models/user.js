'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Ticket }) {
      this.hasMany( Ticket, {
        foreignKey: "userId"
      })
    }
  };
  User.init({
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    role: {
      type: DataTypes.STRING,
      defaultValue: "CLIENT",
    },
    avatar: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
