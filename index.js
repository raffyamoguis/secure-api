const express = require('express');

// setting up express server
const app = express();
app.use(express.json());

const token = require('./routes/token');
const messages = require('./routes/messages');

// application routes
app.use('/api/token', token);
app.use('/api/messages', messages);

// driver code
const SERVER_PORT = 3005;
app.listen(SERVER_PORT, () => {
  console.log(`Service endpoint = http://localhost:${SERVER_PORT}`);
});
