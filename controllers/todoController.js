const { Todo } = require("../models");

class TodoController {
  static findAll = async (req, res, next) => {
    try {
      const todos = await Todo.findAll({});
      res.status(200).json(todos);
    } catch (error) {
      next(error);
    }
  };

  static findOne = async (req, res, next) => {
    try {
      const todo = await Todo.findByPk(req.params.id);

      if (!todo) throw { name: "ErrorNotFound" };
      res.status(200).json(todo);
    } catch (error) {
      next(error);
    }
  };

  static create = async (req, res, next) => {
    try {
      await Todo.create(req.body);
      res.status(201).json({ message: "Todo Created Successfully" });
    } catch (error) {
      next(error);
    }
  };

  static update = async (req, res, next) => {
    try {
      const todo = await Todo.findByPk(req.params.id);
      if (!todo) throw { name: "ErrorNotFound" };
      await todo.update(req.body);
      res.status(200).json({ message: "Todo Updated Successfully" });
    } catch (error) {
      next(error);
    }
  };

  static delete = async (req, res, next) => {
    try {
      const todo = await Todo.findByPk(req.params.id);

      if (!todo) throw { name: "ErrorNotFound" };
      await todo.destroy();
      res.status(200).json({ message: "Todo Deleted Successfully" });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = TodoController;
