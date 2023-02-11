const http = require('http');

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello Kodego!');
});

server.listen(1234, () => {
  console.log('Nodejs App web server at port 1234 is running...');
});
