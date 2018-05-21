var events = require('events');
var util = require('util');

var person = function(name){
  this.name = name;
};

util.inherits(person, events.EventEmitter);

var james = new person('James');
var mary = new person('Mary');
var john = new person('John');

var people = [james, mary, john];

people.forEach(function(person){
  person.on('speak', function(mssg){
    console.log(`${person.name} said: ${mssg}`);
  });
});

james.emit('speak', `Hello!`);
