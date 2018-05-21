var express = require('express');

var app = express();

app.listen(3000);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
});

app.get('/contact', function(req, res){
  res.sendFile(__dirname + '/contact.html');
});

app.get('/profile/:id', function(req,res){
  res.send(' U r requested to c a profile with the id of ' + req.params.id);
});
