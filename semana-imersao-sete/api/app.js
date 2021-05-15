const express = require('express');
const app = express();

const Anuncio = require('./models/Anuncio');

// const db= require("./models/db");

app.get('/', function (req, res){
	res.send('world');
});

app.get('/cadastrar', async(req, res) => {
    const resultCad = await Anuncio.create({
        titulo: 'Pedreiro da função, eletrica, hidráulica, etc...',
        descricao: 'Trabalho da função à entrega da chave, faço orçamento sem compromisso'
    });
});

app.listen(3000, function(){
    console.log("Servidor iniciado na porta 3333: http://localhost:3000/");

}); 
 