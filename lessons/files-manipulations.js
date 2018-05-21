var fs = require('fs');

fs.readFile('read-this.txt', 'utf8', function(err, data){
  fs.writeFile('write-here.txt', data);

  //delete
  // fs.unlink('write-here.txt');
});
