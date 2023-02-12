const { Sequelize, DataTypes } = require('sequelize')
const PokemonModel = require('../models/pokemon')
const UserModel = require('../models/user'); // importation du model user
const pokemons = require('./mock.pokemon')
const bcrypt = require('bcrypt')
  
const sequelize = new Sequelize('pokedex', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb',
  dialectOptions: {
    timezone: 'Etc/GMT-2',
  },
  logging: false
})
  
const Pokemon = PokemonModel(sequelize, DataTypes)
const User = UserModel(sequelize, DataTypes) //instensie le model aupres de sequelize
  
const initDb = () => {
  return sequelize.sync({force: true}).then(_ => {
    pokemons.map(pokemon => {
      Pokemon.create({
        name: pokemon.name,
        hp: pokemon.hp,
        cp: pokemon.cp,
        picture: pokemon.picture,
        types: pokemon.types
      }).then(pokemon => console.log(pokemon.toJSON()))
    })

    bcrypt.hash('pikachu', 10)  //2 parametre => le mdp en lui meme(pikachu) et un nb entier(temps necessaire pour acher un mdp plus le chiffre est elevee plus le mdp est difficile a decryptee mais le delai dencryptage sera plus long)
    .then(hash => {  //recuperation du mdp cryptee
      User.create({ 
        username: 'pikachu',
         password: hash //push hash  et non pikachu
       })
    })
    // .then(user => console.log(user.toJSON()))

    console.log('La base de donnée a bien été initialisée !')
  })
}
  
module.exports = { 
  initDb, Pokemon, User
}