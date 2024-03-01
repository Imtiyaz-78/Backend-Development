

/* ==> CRUD with file System:
        1. Make file
        2. Read file
        3. Update file
        4. Reaname file
        5. Delete file
*/

const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, './7. CRUD with File System');
const filePath = `${dirPath}Apple.txt`

// 1. Create the file:
// fs.writeFileSync(filePath,'This, is an Apple');


// 2. Read the file:
// fs.readFile(filePath, 'UTF-8', (err, items) => {
//         console.log(items);
// })


//3. Updatee the File:
// fs.appendFile(filePath, '\nAnd file is Updated', (err) => {
//         if (!err) {
//                 console.log('File is updated');
//         } else {
//                 console.log('Somthing wet wrong');
//         }
// })


// 4. Rename the file name 
// fs.rename(filePath, `${dirPath}Mango.txt`, (err) => {
//         if (!err) {
//                 console.log('File is renamed');
//         } else {
//                 console.log('Somthing wet wrong');
//         }
// })


// 5. Delete the file name 
fs.unlinkSync(`${dirPath}Mango.txt`);
