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

export const getTodoById = (req, res) => {
  Todo.findById(req.params.todoId, (err, todo) => {
    if (err) {
      res.send(err);
    }
    res.json(todo);
  });
};

export const updateTodoById = (req, res) => {
  Todo.findOneAndUpdate(
    { id: req.params.todoId },
    req.body,
    { new: true },
    (err, todo) => {
      if (err) {
        res.send(err);
      }
      res.json(todo);
    }
  );
};

export const deleteTodo = (req, res) => {
  Todo.remove({ id: req.params.todoId }, (err, todo) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "Sucessfully deleted todo!" });
  });
};
