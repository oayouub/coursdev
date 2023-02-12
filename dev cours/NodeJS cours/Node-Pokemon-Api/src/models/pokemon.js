const validTypes = ["Plante", 'Poison', 'Feu', 'Eau', 'Insecte', 'Vol', 'Normal', 'Electrik', 'Fée']

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Pokemon', {
      id: {
        type: DataTypes.INTEGER, //type de donnees
        primaryKey: true, //cle principal (id unique)
        autoIncrement: true //option particuliere ici autoincrementation
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false, //facultativ ou non ici false veut dire importantes
        unique: {
          msg: 'Le nom est deja pris.'
        },
        validate: {
          notEmpty: { msg: 'Le nom ne peut pas etre vide.'},
          notNull: { msg: 'Le nom est une propriété requise.'}
        }
      },
      hp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: { msg: 'Utilisez uniquement des nombres entiers pour les points de vie.'},
          min: {
            args: [0],
            msg: 'Les points de vie doivent etre superieurs ou egale a 0.'
          },
          max: {
            args: [999],
            msg: 'Les points de vie doivent etre inferieurs ou egale a 999.'
          },
          notNull: { msg: 'Les points de vie sont une propriété requise.'}
        }
      },
      cp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: { msg: 'Utilisez uniquement des nombres entiers pour les points de dégats.'},
          min: {
            args: [0],
            msg: 'Les points de dégats doivent etre superieurs ou egale a 0.'
          },
          max: {
            args: [99],
            msg: 'Les points de dégats doivent etre inferieurs ou egale a 99.'
          },
          notNull: { msg: 'Les points de dégats sont une propriété requise.'}
        }
      },
      picture: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl: { msg: 'Utilisez uniquement une Url valide pour l\'image.'},
          notNull: { msg: 'l\'image est une propriété requise.'}
        }
      },
      types: {
        type: DataTypes.STRING,
        allowNull: false,
        get() {
          return this.getDataValue('types').split(',') //this.getDataValue('types') = valeur de types dans notre base de données
        },
        set(types) {
          this.setDataValue('types', types.join()) // transforme le tableau des types en une chaine de chararcteres unique
        },
        validate: {
          isTypesValue(value) {
            if(!value) {
              throw new Error('Un pokémon doit au moins avoir un type.')
            }
            if(value.split(',').length >3) {
              throw new Error('Un pokémon ne peut pas avoir plus de 3 types.')
            }
            value.split(',').forEach(type => {
              if(!validTypes.includes(type)) {
                throw new Error(`Le type d'un pokémon doit appartenir à la liste suivante : ${validTypes}`)
              }
            });
          }
        }
      }
    }, {
      timestamps: true, //permet dindiquer que nous souhaiton modifier le comportement par default proposee pas sequelize
      createdAt: 'created', //creer (statut)
      updatedAt: false //date de verification
    })
  }