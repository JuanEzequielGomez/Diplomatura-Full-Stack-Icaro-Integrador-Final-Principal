'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuarios extends Model {

    static associate(models) {
      usuarios.hasMany(models.messages, {
        foreignKey: "senderId",
        as: "msgSended"
      })
      usuarios.hasMany(models.messages, {
        foreignKey: "receiverId",
        as: "msgReceived"
      })
    }
  }
  usuarios.init({
    username: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    password: DataTypes.STRING,
    country: DataTypes.STRING,
    city: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'usuarios',
  });
  return usuarios;
};