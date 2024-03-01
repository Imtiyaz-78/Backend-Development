
/*  ==> Today Task to complete This
    1. Create heaeder and API
    2. Create an API with static data
    3. Put data into another file
*/

const student = require("./Student")
const http = require('http');

http.createServer((req, resp) => {
    resp.writeHead(201, { 'Content-Type': 'Apllication\json' });
    // resp.write(JSON.stringify({name: "Md Imtiyaz",email: "imtiyaz@adobe.com",}));
    // or another way of above 
    resp.write(JSON.stringify(student));
    
    resp.end();
}).listen(8000);


