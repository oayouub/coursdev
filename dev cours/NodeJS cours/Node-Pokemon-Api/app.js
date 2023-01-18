const express = require('express') //chercher la dependance 'express
const morgan = require('morgan')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const { Sequelize } = require('sequelize')
const { success, getUniqueId } = require('./helper')
let pokemons = require('./mock.pokemon');

const app = express() //instance dune application express(serveur web)
const port = 3000 //port

const sequelize = new Sequelize(
    'pokedex',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mariadb',
        dialectOprions: {
            timezone: 'Etc/GMT-2'
        },
        logging: false
    }
)

sequelize.authenticate()
.then(_=> console.log('La connexion à la base de données a bien été établie.'))
.catch(error => console.error(`Impossible de se connecter a la base de données ${error}`))

app
.use(favicon(__dirname + '/favicon.ico'))
.use(morgan('dev'))
.use(bodyParser.json())

app.get('/', (req,res) => res.send('Hello, Express !')) //definie un point de terminaison

app.get('/api/pokemons/:id', (req,res)=>{
    const id = parseInt(req.params.id)
    const pokemon = pokemons.find(pokemon => pokemon.id === id)
    const message = 'Un pokémon a bien été trouvé.'
     res.json(success(message, pokemon))
     })

app.get('/api/pokemons',(req,res)=>{
    const id = parseInt(req.params.id)
    const message = 'Voici la liste des pokémons'
    res.json(success(message, pokemons))
    })

app.post('/api/pokemons', (req, res) => {
    const id = getUniqueId(pokemons)
    const pokemonCreated = {...req.body, ...{id: id, created: new Date()}}
    pokemons.push(pokemonCreated)
    const message = `Le pokémon ${pokemonCreated.name} a bien été crée.`
    res.json(success(message, pokemonCreated))
})
 
app.put(`/api/pokemons/:id`, (req, res) =>{
    const id = parseInt(req.params.id)
    const pokemonUpdated = { ...req.body, id: id }
    pokemons = pokemons.map(pokemon => {
        return pokemon.id === id ? pokemonUpdated : pokemon
    })
    const message = `Le pokémon ${pokemonUpdated.name} a bien été modifié.`
    res.json(success(message, pokemonUpdated))
})

app.delete('/api/pokemons/:id', (req, res) =>{
    const id = parseInt(req.params.id)
    const pokemonDeleted = pokemons.find(pokemon => pokemon.id === id)
    pokemons = 
    pokemons.filter(pokemon => pokemon.id !==id)
    const message = `Le pokémon ${pokemonDeleted.name} a bien été supprimé.`
    res.json(success(message, pokemonDeleted))
})

app.listen(port, () => console.log(`Notre appliction Node est démarée sur : http://localhost:${port}`)) //demarre l'api reste
