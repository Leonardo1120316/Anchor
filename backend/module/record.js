const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('record', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    teacher_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    subject: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    record_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    record_time: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    student_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    student_class: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'record',
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
