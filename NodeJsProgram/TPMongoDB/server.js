
/* Ici on va chercher notre ORM Mongoose*/
var mongoose = require('mongoose');
/* Bluebird ? */
mongoose.Promise = require('bluebird');

/* On permet ici à mongoose de pouvoir se connecter à notre serveur de
   base de données */
mongoose.connect('mongodb://127.0.0.1:27017/myappdatabase');

/* on instancie un nouveau Schéma mongoose en vue de le remplir d'entités */
var Schema = mongoose.Schema;

/*
  On crée un entité mongoose correspondant en gros à un objet.
  Cet objet a la notable particularité de contenir la structure d'un utilisateur.
  C'est très pratique afin d'être libre de ne pas forcément spécifier tous les champs.
*/
var userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  location: String,
  meta: {
    age: Number,
    website: String
  },
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

/*
  Ici on insère une nouvelle valeur dans notre entitée.
*/
var chris = new User({
  name: 'Chris2',
  username: 'sevilayha3',
  password: 'password2'
});

// make this available to our users in our Node applications
// module.exports = User;

/*
  ici on se sert de la fonction .save qui est présente dans l'instance de notre
  entité user afin de lancer la sauvegarde de nos données au sein de
  la base de données.
*/

chris.save(function(err) {
  if (err) {
    throw err;
  }else {
    console.log('User saved successfully!');
  }

});

console.log('Fin de script');
