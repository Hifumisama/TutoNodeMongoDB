// on récup express
let app = require('express')();

let http = require('http').Server(app);
let io = require('socket.io')(http);
/* On crée un service pour sockets io afin de gérer plus facilement les
requêtes envoyées vers le serveur*/
let socketioService = require('./websockets/socketio')(io);
/*
  Ici on constate que le serveur node écoute sur le port 5000
*/
http.listen(5000, () => {
  console.log('Ecoute sur le port 5000');
});
