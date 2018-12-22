var counter = function(arr){
    return 'There are ' + arr.length + ' elements in this array';
};

var adder = function(a,b){
    return `The sum of the two numbers is ${a+b}`;
}

var pi = 3.142;

// allows module to be used in other files
// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.counter = pi;


       // can move the module.exports into the variable decleration for less code and cleaner
// module.exports.counter = function(arr){
//     return 'There are ' + arr.length + ' elements in this array';
// };

// module.exports.adder = function(a,b){
//     return `The sum of the two numbers is ${a+b}`;
// }

// module.exports.pi = 3.142;


// using object literal notation 
module.exports = {
    counter: counter, 
    adder: adder,
    pi: pi
};
