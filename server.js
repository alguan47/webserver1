const express = require('express');
const bodyParser = require('body-parser');
// instantiate server
const app = express();

//use body parser to read what POST means
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended : false }));


//listen to messages on the root
app.get('/', (req, res)=>{ //listen on the root, function is for telling what to do when we get the info. first param: request, 2nd param: response
	res.send("<h1>hello</h1>"); 
});

//for queries, use app.get
app.get('/greeting', (req, res) => {
	console.log(req.query)
	res.send("Hello, " + req.query.q);
});


//post request
app.post('/submit-data', (req, res) => { //wont work on browsers because browsers use GET request. need a front end JS
	const data = req.body;
	console.log(data); //will receive data variable from request
	res.send("Received a POST request");
});

//make our server listen to port given
app.listen(3000, () => {
	console.log("Server started at port 3000")
});