const express = require("express");
const auth = require("../middleware/auth");
const { admin, editor, viewer } = require("../middleware/roles");

// setting up express server router
const router = express.Router();

// mock data
let messages = [
  {
    id: 1,
    name: "Lorem ipsum dolor"
  }
];

// messages routes
// each request must have a x-auth-token request header containing a valid access token

// http get - http://localhost:3005/api/messages
router.get("/", [auth, viewer], (req, res) => {
  res.status(200).send({
    status: "ok",
    code: 200,
    result: messages
  });
});

// http post - http://localhost:3005/api/messages
/*
{
    "name": "Some random name"
}
*/
router.post("/", [auth, editor], async (req, res) => {
  messages.push({ id: messages.length + 1, name: req.body.name });
  res.status(201).send({
    status: "created",
    code: 201
  });
});

// http delete - http://localhost:3005/api/messages?key=1
router.delete("/", [auth, admin], async (req, res) => {
  const idToRemove = req.query.key;
  messages = messages.filter(function (item) {
    return item.id != idToRemove;
  });

  res.status(202).send({
    status: "accepted",
    code: 202
  });
});

// Todo - implement put

// export router
module.exports = router;
