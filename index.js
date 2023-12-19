// const fun = require("./moduleA.js");
// fun();

// import { fun } from "./moduleA.js";
// fun();

const express = require("express");

const app = express();
const port = 3333;

let users = [
  { id: 1, name: "victor" },
  { id: 2, name: "guilherme" },
];

app.use(express.json());

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  const { name } = req.body;
  const id = users.length + 1;

  const newUser = { id, name };

  users.push(newUser);
  res.status(201).json(newUser);
});

app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const userIndex = users.find((user) => user.id === id);
  console.log(userIndex);

  if (userIndex) {
    res.json(userIndex);
  } else {
    res.status(404).json({ message: "Usuário não encontrado" });
  }
});

app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;

  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex !== -1) {
    users[userIndex].name = name;
    res.json(users[userIndex]);
  } else {
    res.status(404).json({ message: "Usuário não encontrado" });
  }
});

app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter((user) => user.id !== id);

  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
