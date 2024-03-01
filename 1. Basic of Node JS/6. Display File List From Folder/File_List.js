
/*
   ==> Display or Show file list from folder 
          1. Make the file in folder 
          2. use path module
          3. Get file names and Print
*/



const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, '6. Display File List From Folder');

// for (let i = 0; i < 2; i++) {
//     fs.writeFileSync(dirPath+"Hello" + i + ".txt", "A simple text file"); // or 
//     // fs.writeFileSync(`${dirPath}Hello${i}.txt`, "A simple text file");
// }


// How to read the file 
fs.readdir(dirPath, (err, files)=>{
     console.log(files);
})