const Sequelize = require('sequelize');
// const { ModuleResolutionKind } = require('typescript');

const db = require('./db');

const Anuncio = db.define('anuncios',  {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

// CRIAR TABELA

// Anuncio.sync({ force: true }); SERÁ REALIZADO 
//ESTE COMANDO APENAS UMA VEZ
Anuncio.sync();
module.exports = Anuncio;

