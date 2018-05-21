var http = require('http');
var fs = require('fs');

var readStream = fs.createReadStream(__dirname + '/lessons/read-this.txt');
var writeStream = fs.createWriteStream(__dirname + '/lessons/write-here.txt');

readStream.on('data', function(chunk){
  console.log('new chunk received');
  writeStream.write(chunk);
})
