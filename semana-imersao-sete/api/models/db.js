const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
// const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

// Option 2: Passing parameters separately (sqlite)
// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: 'path/to/database.sqlite'
// });

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('pcelke', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

// sequelize
// .authenticate().then(function(){
//   console.log("Conexão com banco de dados realizada com sucesso!");
// }).catch(function(err){
//   console.log("Erro: Conexão com banco de dados não realizada com sucesso!");
// });


module.exports = sequelize;
