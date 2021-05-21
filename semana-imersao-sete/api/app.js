const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());

app.use((req, res, next) => {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization")


    app.use(cors());
    next();
});



const Anuncio = require('./models/Anuncio');

// const db= require("./models/db");

app.get('/', async (req, res) => {
	// res.send('Home page');
    await Anuncio.findAll({ order: [['id', 'ASC']] }).then(function(anuncios){
        res.json({ anuncios });
    });
});

app.get('/visualizar/:id', async (req, res) => {
    // res.send("ID: " + req.params.id);
    await Anuncio.findByPk(req.params.id)
    .then(anuncioBd => {
        return res.json({
            error: false,
            anuncio: anuncioBd
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro: Anúncio nao encontrado!"
        });
    });
});

app.put('/editar', async (req, res) => {
    await Anuncio.update(req.body, {
        where: { id: req.body.id }
    }).then(function(){
        return res.json({
            error: false,
            message: "Anúncio editado com sucesso!"
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro: Anúncio não editado com sucesso!"
        });
    });
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
    });
});

app.delete('/apagar/:id', async (req, res) => {
    await Anuncio.destroy({
        where: { id: req.params.id }
    }).then(function(){
        return res.json({
            error: false,
            message: "Anuncio apagado com sucesso!"
        });
    }).catch(function(err){
        res.send('Erro: Anúncio não cadastrado com sucesso!');
        return res.status(400).json({
            error: true,
            message: "Erro: Erro: Anúncio não apagado com sucesso!"
        });
    });
});

app.listen(3000, function(){
    console.log("Servidor iniciado na porta 3333: http://localhost:3000/");

}); 
 