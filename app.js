var fs = require('fs');

        // delete a file using node 'fs.unlink' method
// fs.unlink('writeMe.txt');
        
        // asyncronous versions of creating/deleting directories
        // create a directory using node 'fs.mkdirSync' method
// fs.mkdirSync('stuff');

        // deletes a directory using node 'rmdirSync' method
// fs.rmdirSync('stuff');


        // syncronous versions of creating/deleting directories
        // reads a file, and creates a new directory and a file in that new directory to store the read text
// fs.mkdir('stuff', function(){
//   fs.readFile('readMe.txt', 'utf8', function(err, data){
//       fs.writeFile('./stuff/writeMe.txt', data); 
//   }); 
// });

        // remove a file and its parent direcotory
// fs.unlink('./stuff/writeMe.txt', function(){
//     fs.rmdir('stuff');
// })







