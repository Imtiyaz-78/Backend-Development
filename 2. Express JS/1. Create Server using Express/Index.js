

const express = require('express');
const app = express();


app.get('/home', (req, res) => {
    console.log("Data sent by browser =>>>", req.query.name);
    res.send('<>This is Home Page' + req.query.name)
})

app.get('/about', (req, res) => {
    res.send('This is About us page')
})

app.get('/contact', (req, res) => {
    res.send('This is Contact us page');
})


// To Create port or server 
app.listen(8000)