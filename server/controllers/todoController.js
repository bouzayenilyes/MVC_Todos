const Todo = require("../models/todo");

// Get all todos
exports.getTodos = async (req, res) => {
  const todos = await Todo.findAll();
  res.json(todos);
};

// Create new todo
exports.createTodo = async (req, res) => {
  const { title } = req.body;
  const todo = await Todo.create({ title });
  res.json(todo);
};

// Update todo
exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  const todo = await Todo.findByPk(id);
  if (!todo) return res.status(404).json({ msg: "Todo not found" });
  todo.completed = completed;
  await todo.save();
  res.json(todo);
};

// Delete todo
exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  await Todo.destroy({ where: { id } });
  res.json({ msg: "Todo deleted" });
};
