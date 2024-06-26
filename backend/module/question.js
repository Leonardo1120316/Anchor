const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('question', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
   question_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    question_introduce: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    question_state: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    student_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
  }, {
    sequelize,
    tableName: 'question',
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
