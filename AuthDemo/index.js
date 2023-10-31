const express = require('express');
const app = express();
const User = require('./models/user');

mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
    .then(()=>{ 
        console.log("Connection Open!!") }) 
    .catch(err=>{ console.log("OH NO ERROR!!") 
        console.log(err) })

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/register', (req, res)=>{
    res.render('register') //rename for template
})

app.get('/login', (req, res)=>{
    res.send("can log in")
})

app.listen(3000, ()=>{
    console.log("serving users!");
})