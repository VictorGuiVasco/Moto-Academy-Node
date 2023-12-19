const express = require("express");

const UsersController = require("./controllers/users");

const routes = express.Router();
const usersController = new UsersController();

routes.get("/users", usersController.index);
routes.get("/users/:id", usersController.get);
routes.post("/users", usersController.create);
routes.put("/users/:id", usersController.update);
routes.delete("/users/:id", usersController.delete);

export default routes;
