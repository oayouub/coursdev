const express = require('express') //chercher la dependance 'express
const { success } = require('./helper')
let pokemons = require('./mock.pokemon');

const app = express() //instance dune application express(serveur web)
const port = 3000 //port

app.get('/', (req,res) => res.send('Hello, Express !')) //definie un point de terminaison

app.get('/api/pokemon/:id', (req,res)=>{
    const id = parseInt(req.params.id)
    const pokemon = pokemons.find(pokemon => pokemon.id === id)
    const message = 'Un pokémon a bien été trouvé.'
     res.json(success(message, pokemon))

    })

app.get('/api/pokemons',(req,res)=>{
    res.send(`Il y a ${pokemons.length} pokémons dans le pokédex, pour le moment.`)
    })

app.listen(port, () => console.log(`Notre appliction Node est démarée sur : http://localhost:${port}`)) //demarre l'api reste
