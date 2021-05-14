const express = require('express');
const app = express();

constdb= require("./models/db");

app.get('/', function (req, res){
	res.send('world');
});

app.listen(3000, function(){
    console.log("Servidor iniciado na porta 3333: http://localhost:3000/");
}); 
 