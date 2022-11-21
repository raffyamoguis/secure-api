const express = require('express');
const cors = require('cors');
// setting up express server
const app = express();

app.use(express.json());

const token = require('./routes/token');
const messages = require('./routes/messages');

app.use(cors());
// application routes
app.use('/api/token', token); //Generate token
app.use('/api/messages', messages); //Secure api

//Free api
app.get('/api/free', (req, res) => {
  res.status(200).send({
    status: 'ok',
    code: 200,
    result: 'Your using the free api',
  });
});

// driver code
const SERVER_PORT = 3005;
app.listen(SERVER_PORT, () => {
  console.log(`Service endpoint = http://localhost:${SERVER_PORT}`);
});
