const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('message', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sender_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    reciever_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    content: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    message_state: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    reciever_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
  }, {
    sequelize,
    tableName: 'message',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
