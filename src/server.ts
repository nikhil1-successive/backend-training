import express from 'express';
import run from './app'
const app = express();

app.get('/', function (req, res) {
  res.send('Welcome.');
});
const port = 8000;

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
run()

