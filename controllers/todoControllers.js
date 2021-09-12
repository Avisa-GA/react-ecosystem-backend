import Todo from "../models/todoModel";

export const addNewTodo = (req, res) => {
  let newTodo = new Todo(req.body);
  newTodo.save((err, todo) => {
    if (err) {
      res.send(err);
    }
    res.json(newTodo);
  });
};

export const getTodosList = (req, res) => {
  Todo.find({}, (err, todos) => {
    if (err) {
      res.send(err);
    }
    res.json(todos);
  });
};
