const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plan', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    plan_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    plan_introduce: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    plan_state: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    student_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
  }, {
    sequelize,
    tableName: 'plan',
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
