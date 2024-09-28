const express = require('express');
const app = express();
const path = require('path');


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public'))); //this tells the program to find vanilla js files in a directory called public
app.set('view engine', 'ejs')

app.get('/', function(req, res){
    res.render("index"); //views/index.ejs file renders here
})

app.get('/profile/:username', function(req, res){
    res.send(`Welcome! ${req.params.username}`); //views/index.ejs file renders here
}) //adding a : makes the url dynamic so any name after the : works 

app.listen(3000, function(){
    console.log("Server Working Properly!");
    
});