import express, { Request, Response } from "express";
import { validate } from "..";
import { User } from "./validation/user.validation";

interface IUser {
  name: string;
  email: string;
  age: number;
}

const app = express();
app.use(express.json());

app.post("/user", async (req: Request<{}, {}, Required<IUser>>, res: Response) => {
  const { name, age, email } = req.body;
  const user = new User();
  user.name = name;
  user.age = age;
  user.email = email;

  await validate(user)
    .then((p) => {
      res.status(201).json(p);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});

const port = 5000;
app.listen(port, () => console.log("Server running on: " + port));
