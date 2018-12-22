// fetches built in Node method 'fs'
var fs = require('fs');

// synconous version of method
// code below will not fire until this event (syncronous event)
//  fs module has gone out and read the contents of the txt file
var readMe = fs.readFileSync('readMe.txt', 'utf8');

//uses a second node method to get create a new file to display the text from the readMe file in
fs.writeFileSync('writeMe.txt', readMe);

// // asyncronous versions of these methods
// file si written right away even though it is later in the code i.e. asyncronous
// fs.readFile('readMe.txt', 'utf8', function(err, data){
//         fs.writeFile('writeMe.txt', data);
// });

