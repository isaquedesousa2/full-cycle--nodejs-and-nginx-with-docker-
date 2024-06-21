import express from "express";
import "dotenv/config";
import { createUser } from "./app/create-user.js";
import { findAllUsers } from "./app/findall-users.js";

const app = express();

app.get("/", async (req, res) => {
  await createUser("John");
  const users = await findAllUsers();

  const usersHtml = users.map((user) => `<li>${user.name}</li>`).join("");

  const response = `
    <div>
      <h1>Full Cycle Rocks!</h1>
      <ul>
        ${usersHtml}
      </ul>
    </div>
  `;

  res.status(200).send(response);
});

app.listen(process.env.SERVER_PORT, () => {
  console.log("listening on port " + process.env.SERVER_PORT);
});
