const express = require('express');
const auth = require('../middleware/auth');
const { admin, editor, viewer } = require('../middleware/roles');

// setting up express server router
const router = express.Router();

// messages routes
// each request must have a x-auth-token request header containing a valid access token

// http get - http://localhost:3005/api/messages
router.get('/', [auth, viewer], (req, res) => {
  res.status(200).send({
    status: 'ok',
    code: 200,
    result: 'Your accessing the secured api',
  });
});

// export router
module.exports = router;
