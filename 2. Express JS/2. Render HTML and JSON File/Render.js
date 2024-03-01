


const express = require('express');
const app = express();


app.get('/home', (req, res) => {
    console.log("Data sent by browser =>>>", req.query.name);
    res.send('<h1>Welcome to Home Page</h1>' + req.query.name)
})

// Send HTML Data 
app.get('/about', (req, res) => {
    res.send(`
    <input type= "text" placeholder ="Enter username"/>
    <button >Submit</button>
    `)
})


// Send JSON Data 
app.get('/contact', (req, res) => {
    res.send([
        {
            id: 0,
            name: 'Imtiyaz',
            age: 23,
            username: "Imtiyaz78",
            email:"Imtiyaz@google.com"
        },

        {   
            id: 1,
            name: 'Mozakkir',
            age: 2,
            username: "Moz7878",
            email:"Imtiyaz@Adobe.com"
        },

    ]);
});


// To Create port or server 
app.listen(8000)