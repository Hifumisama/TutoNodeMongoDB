/* Ici on va chercher notre ORM Mongoose*/
var mongoose = require('mongoose');

/* On permet ici à mongoose de pouvoir se connecter à notre serveur de
   base de données */
mongoose.connect('mongodb://127.0.0.1:27017/TPChat');

/* on instancie un nouveau Schéma mongoose en vue de le remplir d'entités */
var Schema = mongoose.Schema;

/*
  On crée un entité mongoose correspondant en gros à un objet.
  Cet objet a la notable particularité de contenir la structure d'un utilisateur.
  C'est très pratique afin d'être libre de ne pas forcément spécifier tous les champs.
*/
var userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: String,
  surname: String,
  location: String,
  created_at: Date,
  updated_at: Date
});

/*
  une fois que l'on a instancié le schéma, on doit aussi le modéliser.
  En fait on crée une entitée, avec ses méthodes.


  ****************** SCHEMA = Structure de données *******************
  ********* Modèle = Structure de données AVEC SES METHODES **********
*/

var User = mongoose.model('User', userSchema);

module.exports = User;
