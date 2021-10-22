const http = require('http');

const server = http.createServer(function(req, res){
  //returns 200 header
  res.writeHead(200 , {'Content-Type': 'text/plain'});
  //Log path
  console.log('Request URL:' + req.url);
  //returns message
  res.end('Hello World');

});

server.listen(8080, 'localhost', null, function() {console.log('Server is listening on 8080.')})