var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  /*On stocke le pseudo de la personne directement dans l'objet socket.
  Cependant c'est plus de l'ordre du bidouillage que de la vraie gestion de session
  */
  socket.pseudo = "user";
  socket.emit('message', 'Vous êtes officiellement connectés à la plateforme !');

  /* Dans ce cas on voit une autre caractéristique de sockets.io :  il s'agit du broadcast.
  Cela permet en gros de pouvoir envoyer des données à l'ensemble des clients qui sont connectés
  au serveur. */
  socket.broadcast.emit('message', "Message à toutes les unités. Je répète, message à toutes les unités.");


  /*Ici on écoute le message provenant du client !
  A noter que la réception, comme l'émission, se fait obligavoirement
  après la connexion... c'est con mais bon...*/
  socket.on('message',function(message) {
    console.log(message + socket.pseudo);
  });
  socket.on('pseudonyme', function(pseudo) {
    socket.pseudo = pseudo;
    console.log(pseudo);
  });
});

http.listen(8080, function(){
  console.log('listening on *:8080');
});
