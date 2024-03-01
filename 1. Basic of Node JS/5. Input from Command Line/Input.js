

/*
    ==> Input from command Line
    1. To get the input from Command line <-- we can use "process" object in Node jS
    2. Create the file with Input 
    3. Delete the file with Input
*/

const fs = require('fs');
const input = process.argv;

if (input[2] == 'add') {
    fs.writeFileSync(input[3], input[4]);
} else if (input[2] == 'remove') {
    fs.unlinkSync(input[3]);
} else {
    console.log("Invalid Input");
}


// console.log(process.argv[2]);

