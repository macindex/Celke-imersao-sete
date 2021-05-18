const express = require('express');
const app = express();

app.use(express.json());

const Anuncio = require('./models/Anuncio');

// const db= require("./models/db");

app.get('/', function (req, res){
	// res.send('Home page');
    Anuncio.findAll({ order: [['id', 'ASC']] }).then(function(anuncios){
        res.json({ anuncios });
    });
});

app.get('/visualizar', async (req, res) => {
    res.send("")
});

app.post('/cadastrar', async(req, res) => {
    const resultCad = await Anuncio.create(
        req.body
    ).then(function (){
        //res.send('Anuncio cadastrado com sucesso!');
        return res.json({
            error: false,
            message: "Anuncio cadastrado com sucesso!"
        })
    }).catch(function(err){
        res.send('Erro: Anúncio não cadastrado com sucesso!');
        return res.status(400).json({
            error: true,
            message: "Erro: Erro: Anúncio não cadastrado com sucesso!"
        });
    })
});

app.listen(3000, function(){
    console.log("Servidor iniciado na porta 3333: http://localhost:3000/");

}); 
 