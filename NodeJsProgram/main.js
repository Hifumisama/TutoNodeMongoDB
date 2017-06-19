const user = require("./user/user");
user1 = new user('PoivronSalé');
user2 = new user('BisouSucré');

user1.hello("Yolomaggle");
user2.hello("c'est un peu la galère là u_u");

console.log('il y a '+user1.users.length + ' utilisateurs');
for (var i=0; i < user1.users.length; i++){
  console.log('Utilisateur =  '+user1.users[i]);
}
