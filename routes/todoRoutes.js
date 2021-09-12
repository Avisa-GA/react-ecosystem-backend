import { addNewTodo, getTodosList } from "../controllers/todoControllers";

const routes = (app) => {
  app.route("/todos").get(getTodosList).post(addNewTodo);
};

export default routes;
