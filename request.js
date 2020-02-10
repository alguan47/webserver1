const request = require('request')

//request(path, callfxn(err, response, body) <- callback fxn)
request('http://localhost:3000/', (err, response, body) =>{
	console.log(body);
});


const data = {
	id: 0,
	message: "hallu w o r l d UWU"
}

request('http://localhost:3000/submit-data', //give data var to server
		{method: "POST", form: data},
		 (err, response, body) => {
		 	console.log(body)
		 });