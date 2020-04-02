const express = require('express')
const app = express()

app.listen(3000);
app.set('view engine', 'ejs');


app.get('/', function(req, res){
    res.send('this is the homepage')
})

app.get('/contact', function(req, res){
    res.send('dont contact me')
})

app.get('/profile/:name', function(req, res){
    var data = {age: 18, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']}
    res.render('profile', {person: req.params.name, data: data})
})
