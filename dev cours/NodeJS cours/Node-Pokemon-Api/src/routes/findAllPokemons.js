const { Pokemon } = require('../db/sequelize') //import de Pokemon depuis sequelize.js
const auth = require('../auth/auth')
  
module.exports = (app) => { //export dune fonction qui prend en parametres lapplication express toutes entiere
  app.get('/api/pokemons', auth, (req, res) => {
    Pokemon.findAll()
      .then(pokemons => {
        const message = 'La liste des pokémons a bien été récupérée.'
        res.json({ message, data: pokemons })
      })
      .catch(error => {
        const message = `La liste des pokémons n'a pas pu etre récupérée. Réessaye dans quelques instants.`  
        res.status(500).json({ message, data: error })
      })
  })
}