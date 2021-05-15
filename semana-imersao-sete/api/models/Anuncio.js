const Sequelize = require('sequelize');
const { ModuleResolutionKind } = require('typescript');
const sequelize = require('./db');

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

Anuncio.sync({ force: true });
module.exports = Anuncio;
