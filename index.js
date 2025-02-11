const express = require("express");
const app = express();
const PORT = 9000;

app.use(express.urlencoded({ extended: true }));

const users = [
  {
    name: "Subahan Islam",
    age: 21,
  },
  {
    name: "Juwel Islam",
    age: 21,
  },
  {
    name: "Imran Islam",
    age: 21,
  },
];
const htmlForm = `
<form method="POST" action="/user"> 
<input type="text" name="name" placeholder="Enter name"/>
<input type="number" name="age" placeholder="Enter age"/>
<button type="submit">Save User</button>
</form>
`;

app.get("/", (req, res) => {
  res.send(htmlForm);
});

app.post("/user", (req, res) => {
  const name = req.body.name;
  const age = Number(req.body.age);
  const user = {
    name,
    age,
  };
  users.push(user)
  res.status(201).json({
    success:true,
    users
  })
});

app.use((req, res, next) => {
  res.status(404).json({
    message: "resource not found",
  });
});

app.listen(PORT, () => {
  console.log(`server is running http://localhost:${PORT}`);
});
