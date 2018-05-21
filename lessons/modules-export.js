var counter = function(arr){
  return 'There are ' + arr.length + ' elements in this array';

};

var adder = function(a,b){
  return `The sum of 2 numbers is ${a+b}`;
};

const pi = 3.14;


module.exports = {
  counter: counter,
  adder: adder,
  pi: pi
}
