require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const githubdtata ={
    "login":"shivpalyadav",
    "id":"11422133",
    "username":"its shivpal"
}

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/youtube', (req, res) => {
    res.send('hello youtube');
});

app.get('/login', (req, res) => {
    res.send('<h1>hello please login</h1>');
});

app.get('/githubdtata', (req,res)=>{
   res.json(githubdtata)
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});