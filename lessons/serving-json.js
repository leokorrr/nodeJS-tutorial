var http = require('http');
var fs = require('fs');

var readStream = fs.createReadStream(__dirname + '/lessons/read-this.txt');
var writeStream = fs.createWriteStream(__dirname + '/lessons/write-here.txt');

readStream.pipe(writeStream);

var server = http.createServer(function(req,res){
  res.writeHead(200, {'Content-type': 'application/json'});

  var myObj = {
    name: 'Eminem',
    job: 'Rapper',
    age: 45
  }
  res.end(JSON.stringify(myObj));

});

server.listen(3000, '127.0.0.1');
console.log('now listening to port 3000');
