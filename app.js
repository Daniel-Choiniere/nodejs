// takes a function as a parameter
function callFunction(fun) {
    fun();
}

// // normal function statement
// function sayHI() {
//     console.log('hi');
// }

// sayHI();


// function expression
var sayBye = function() {
    console.log('bye');
};

callFunction(sayBye);

