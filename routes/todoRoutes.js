import {
  addNewTodo,
  getTodosList,
  getTodoById,
  updateTodoById,
  deleteTodo,
} from "../controllers/todoControllers";

const routes = (app) => {
  app.route("/todos").get(getTodosList).post(addNewTodo);
  app
    .route("/todos/:todoId")
    .get(getTodoById)
    .delete(deleteTodo)
    .put(updateTodoById);
};

export default routes;
