var http = require('http');

var server = http.createServer(function(req,res){
  res.writeHead(200, {'Content-type': 'text/plain'});
  res.end(req.url);
});

server.listen(3000, '127.0.0.1');
console.log('now listening to port 3000');
