'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class messages extends Model {

    static associate(models) {
      messages.belongsTo(models.usuarios, {
        foreignKey: "senderId"
      })
      messages.belongsTo(models.usuarios, {
        foreignKey: "receiverId",
        as: "destinatario"
      })
    }
  }
  messages.init({
    message: DataTypes.TEXT,
    receiverId: DataTypes.INTEGER,
    senderId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'messages',
  });
  return messages;
};