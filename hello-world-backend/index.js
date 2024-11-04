const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World from Express.js!');
});

app.get('/health', (req, res) => {
  res.send('OK');
});

app.get('/version', (req, res) => {
  res.send('1');
});

app.get('/hello/:name', (req, res) => {
  res.send(`Hello ${req.params.name} from Express.js!`);
});

app.post('/hello', (req, res) => {
  res.send(`Hello ${req.body.name} from Express.js!`);
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

module.exports = app;