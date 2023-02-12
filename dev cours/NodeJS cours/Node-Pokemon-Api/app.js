const express = require('express') //chercher la dependance 'express
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const sequelize = require('./src/db/sequelize')

const app = express() //instance dune application express(serveur web)
const port = process.env.PORT || 3001 //port


app
.use(favicon(__dirname + '/favicon.ico'))
.use(bodyParser.json())

sequelize.initDb() 

app.get('/', (req, res) => {
    res.json('Hello API')
})

//futur points de terminaisons ici
require('./src/routes/findAllPokemons')(app) //astuce de sintaxe => const findAllPokemons = resquire(blablabla) 
require('./src/routes/findPokemonByPk')(app)
require('./src/routes/createPokemon')(app)
require('./src/routes/updatePokemon')(app)
require('./src/routes/deletePokmon')(app)
require('./src/routes/login')(app)


// on ajoute la gestion des erreurs 404
app.use(({res}) => {
    const message = 'Impossible de trouver la ressource demandée ! Vous pouvez essayer une autre URL.'
    res.status(404).json({message})
})


app.listen(port, () => console.log(`Notre appliction Node est démarée sur : http://localhost:${port}`)) //demarre l'api reste


