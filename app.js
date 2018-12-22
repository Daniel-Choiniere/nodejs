var events = require('events');
var util = require('util');

    // example 1
// var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent', function(mssg){
//     console.log(mssg);
// });

// myEmitter.emit('someEvent', 'the event was emitted');

    // example 2
var Person = function(name){
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');
var people = [james, mary, ryu];

people.forEach(function(person) {
   person.on('speak', function(mssg){
       console.log(person.name + ' said: ' + mssg);
   }); 
});

james.emit('speak', 'hey dudes');
ryu.emit('speak', "I want a curry")


