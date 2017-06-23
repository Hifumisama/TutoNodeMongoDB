/* On importe le modèle de notre entité */
const Message = module.require('../models/messages');
/*On importe son service affilié, qui permet donc de gérer l'interaction avec.*/
const MessageService = module.require('../services/message-service.js');
/* ON INSTANCIE le service avec un new, suivi de l'envoi du modèle en paramètre*/
var messageService = new MessageService(Message);

module.exports = function(io) {

  /* Ici rien de compliqué, on vérifie la connexion de l'utilisaveur vers
  le serveur node.*/

  io.on('connection', function(socket) {
    /* inversement, quand l'utilisateur veut se déconnecter, alors on
    le notifie également.*/
    console.log("Utilisateur connecté");

    socket.on('disconnect', function() {
      console.log('Utilisateur déconnecté');
    });
    /*
    Cette partie s'occupe cette fois de gérer l'envoi/réception de messages
    Quand il recoit un message, il se contente de le renvoyer derrière.
    */
    socket.on('add-message', (message) => {
      /* Ajout de ma part, taut qu à faire autant rajouter un système de notification
      pour les messages envoyés au serveur. */
      socket.broadcast.emit('notification', 'En maintenance');

      console.log("Nouveau message envoyé");
      /* Ie find all sert à chopper tous les messages envoyés par les utilisateurs */
      /* Ici on cale notre emit sans problème en utilisant le messageService */
      messageService.findAll().then(data => socket.emit('message', data));
    });

  });

};
