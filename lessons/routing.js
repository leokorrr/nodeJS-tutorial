var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){

  if(req.url === '/home' || req.url ==='/'){
    res.writeHead(200, {'Content-Type':'text/html'});
    fs.createReadStream(__dirname +'/index.html').pipe(res);
  }
  else if(req.url === '/contact'){
    res.writeHead(200, {'Content-Type':'text/html'});
    fs.createReadStream(__dirname +'/contact.html').pipe(res);
  }
  else if(req.url === '/api/rappers'){
    var rappers = [
      {name: "Eminem", age: 45},
      {name: "xxxtentacion", age:20}
    ];
    res.writeHead(200, {'Content-type':'application/json'});
    res.end(JSON.stringify(rappers));
  } else{
    res.writeHead(200, {'Content-Type':'text/html'});
    fs.createReadStream(__dirname +'/404.html').pipe(res);
  }

});

server.listen(3000, '127.0.0.1');
console.log('now listening to port 3000');
