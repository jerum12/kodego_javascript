const express = require('express');
const app = express();
const port = 1234;

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

app.get('/contactus', (request, response) => {
  response.send('Contact Us Page');
});

app.get('/data', (request, response) => {
  response.status(200).json({
    name: 'Kodego',
    age: 12,
    occupation: 'Web Dev',
  });
});

app.get('/about', (request, response) => {
  response.send('About Us Page');
});

app.post('/submit', (request, response) => {
  let name = request.body.name;
  let message = request.body.message;

  response.send(`Name : ${name}, Message : ${message}!`);
});

app.listen(port, () => {
  console.log(`Express app listening to port ${port}`);
});
