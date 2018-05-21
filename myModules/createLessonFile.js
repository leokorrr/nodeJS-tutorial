var fs = require('fs');

var createLessonFile = function(fileName){
  fs.readFile('./app.js', 'utf8', function(err,data){
      fs.writeFile(`lessons/${fileName}`, data);
  });
}

module.exports = {
  createLessonFile: createLessonFile
}
