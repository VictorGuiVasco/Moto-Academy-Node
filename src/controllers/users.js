let users = [
  { id: 1, name: "victor" },
  { id: 2, name: "guilherme" },
];

export default class UsersController {
  index(request, response) {
    response.send(users);
  }

  create(request, response) {
    const { name } = request.body;
    const id = users.length + 1;

    const newUser = { id, name };

    users.push(newUser);
    response.status(201).json(newUser);
  }

  get(request, response) {
    const id = parseInt(request.params.id);
    const userIndex = users.find((user) => user.id === id);
    console.log(userIndex);

    if (userIndex) {
      response.json(userIndex);
    } else {
      response.status(404).json({ message: "Usuário não encontrado" });
    }
  }

  update(request, response) {
    const id = parseInt(request.params.id);
    const { name } = request.body;
    const userIndex = users.filter((user) => user.id === id);

    if (userIndex !== -1) {
      users[userIndex].name = name;
      response.json(users[userIndex]);
    } else {
      response.status(404).json({ message: "Usuário não encontrado" });
    }
  }

  delete(request, response) {
    const id = parseInt(request.params.id);
    users = users.filter((user) => user.id !== id);

    response.sendStatus(204);
  }
}
