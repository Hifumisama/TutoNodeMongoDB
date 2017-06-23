var User = require('../Models/user');

/* Récupère la liste de l'ensemble des utilisateurs*/

function getAllUsers() {
  User.find({}, function(err, users) {
    if (err) throw err;
    return users;
  });
}
/* Récupère un utilisateur selon son nom */
function getUser(user) {
  var getUser = User(user);
  getuser.find(getuser.username, function(err, user) {
    if (err) throw err;
    return user;
  });
}

/* Permet de créer un utilisateur */
function setUser(user) {

  var newUser = User(user);
  console.log(newuser);

  newUser.save(function(err) {
    if (err) throw err;
    console.log('Utilisateur Sauvegardé !');
  });
}
/* Permet de mettre à jour un utilisateur*/
function updateUser(user) {
  var updateuser =  User(user);
  console.log(updateuser);
  updateuser.find(updateuser.username, function(err, user) {
    if (err) throw err;
    // changements à faire
    updateuser.save(function(err) {
      if (err) throw err;
      console.log('Utilisateur mis à jour !');
    });

  });
}

/* Permet de supprimer un utilisateur */
function deleteUser(user) {
  var deleteuser = User(user);
  console.log(deleteuser);
  deleteuser.find(deleteuser.username, function(err, user) {
    if (err) throw err;
    // changements à faire
    deleteuser.remove(function(err) {
      if (err) throw err;
      console.log('Utilisateur mis à jour !');
    });

  });
}
