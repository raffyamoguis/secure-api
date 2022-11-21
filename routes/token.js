const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// setting up express server router
const router = express.Router();

// user authentication

// http post - http://localhost:3005/api/token
/*
{
    "email": "abc@example.com",
    "password": "P@ssword01!"
}
*/
router.post("/", async (req, res) => {
  // mock data
  const users = [
    {
      email: "abc@example.com",
      password: "$2b$15$U9UK8N.m5uWbletbMwKlHuYRxXRY5j/cbaWmtK9TAxSncFgk5vdQu", // P@ssword01!
      roles: ["admin", "editor", "viewer"]
    }
  ];

  // get user from db and if not found throw error
  let user = users.find((u) => req.body.email == u.email);
  if (!user) throw new Error("Invalid user");

  // compare password with password from the db
  const valid = await bcrypt.compare(req.body.password, user.password);
  if (!valid) throw new Error("Invalid password");

  const tkn = jwt.sign(
    {
      id: user.id,
      roles: user.roles
    },
    "jwtPrivateKey",
    { expiresIn: "15m" }
  );

  res.status(200).send({
    status: "ok",
    code: 200,
    token: tkn
  });
});

// export router
module.exports = router;
