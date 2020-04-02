const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'pug')

app.get('/', function(req, res){
	res.render('index', {title: "hey", message: "hello"})
})

var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.listen(3000, function(){
	console.log('dear oh dear')
})

app.get('/contact', function(req, res){
	res.render("contact", req.query)
})

app.post('/contact', urlencodedParser, function(req, res){
	console.log(req.body)
	res.render("contact-success", req.query)
})
