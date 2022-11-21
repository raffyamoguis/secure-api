const express = require('express');
const jwt = require('jsonwebtoken');

// setting up express server router
const router = express.Router();

// user authentication

// http post - http://localhost:3005/api/token

router.post('/', async (req, res) => {
  // mock data
  const users = [
    {
      email: 'user@dev.co',
      password: 'user123',
      roles: ['viewer'],
    },
  ];

  // get user from db and if not found throw error
  let user = users.find((u) => req.body.email == u.email);
  if (!user) throw new Error('Invalid user');

  // compare password this is just for demonstration
  const valid = req.body.password === user.password;
  if (!valid) throw new Error('Invalid password');

  const tkn = jwt.sign(
    {
      id: user.id,
      roles: user.roles,
    },
    'jwtPrivateKey',
    { expiresIn: '15m' }
  );

  res.status(200).send({
    status: 'ok',
    code: 200,
    token: tkn,
  });
});

// export router
module.exports = router;
