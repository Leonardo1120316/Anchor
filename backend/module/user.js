const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    userAccount: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    userPassword: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    userAvatar: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    userClass: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    introduce: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    integral: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    friend: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    association: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    class: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    role: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user',
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
