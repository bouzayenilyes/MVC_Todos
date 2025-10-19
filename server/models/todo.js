const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Todo = sequelize.define("Todo", {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});

sequelize.sync()
  .then(() => console.log("Todos table created"));

module.exports = Todo;
