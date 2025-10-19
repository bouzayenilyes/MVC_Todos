const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database/todo.sqlite"
});

sequelize.authenticate()
  .then(() => console.log("Database connected"))
  .catch(err => console.log("Error: " + err));

module.exports = sequelize;
