/*C'est HORRIBLE DE LE VOIR COMME CELA
mais c'est bien un objet javascrpt u_u...
Il est instanciable comme n'importe quelle autre classe dans
un langage Objet*/

var User = function(user) {
  this.name = user;
  this.monexportDeVariable = "Une variable quelconque";
  this.users.push(this);
  this.hello = function(msg){
    var fullmsg = user+ ' dit ' + msg;
    console.log(fullmsg);
  };
};

/* On crée l'existence du tableau via le prototypage.*/

User.prototype.users = [];

/*
  ici le module.exports sert à rendre récupérable
  notre fonction dans d'autres objets,
  à la condition que nous utilisions un require dans le fichier cible.
*/
module.exports = User;
