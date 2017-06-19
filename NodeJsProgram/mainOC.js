
/*On peut utiliser express.js afin de se faciliter la tâche concernant la
gestion des fonctions de node.js. Pour cela on l'instancie d'abord avec
un require*/

var express = require('express');

// On utilise par la suite la fonction d'express via app.
const app = express();

/*Ici on peut créer une route d'accès à une page/URL.
Elle se compose d'une url, puis dans le callback :
- un header, avec le type de contenu envoyé par le serveur.
- une réponse, qui sera envoyé à l'utilisateur.*/

/* Il est d'ailleurs tout à fait possible de pouvoir chainer les routes les unes
après les autres.*/
app.get('/', function(req, res) {
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end("Vous etes a l'accueil");
})
.get('/hub', function(req, res) {
  res.writeHead(200,{"Content-Type":"text/html"});
  res.end("Le Hub, ou autrement dit le hall du choix.... ?");
})
.get('/tourES', function(req, res) {
  res.writeHead(200,{"Content-Type":"text/html"});
  res.end("Ici c'est la tour d'entrée sortie :D");
})
.get('/QG', function(req, res) {
  res.writeHead(200,{"Content-Type":"text/html"});
  res.end('Bienvenue au QG Mon général >:)');
})

/* Cette requête est très intéressante :  En effet elle embarque un paramètre
d'url, que l'on va pouvoir utiliser.
Ensuite on utilise une commande de rendu, afin de rendre un template ejs.
C'est donc res.render('chemin de la vue, {parametre:req.params.nomparametre}')
Donc req.params permet de chopper les paramètres contenues dans l'URL.*/

/* A noter que l'on peut tout à fait utiliser plusieurs paramètres à faire passer
à notre vue, qui n'ont d'ailleurs pas forcément besoin d'être dans l'URL.
Tout ce dont il a besoin c'est d'un fichier json contenant les paramètres.*/

.get('/salle/:no_salle', function(req,res){
  var noms =  ['Mr Fantastic','Storm','Wolverine'];
  res.render('home.ejs',{numsalle: req.params.no_salle, noms: noms})
})


/* Le use permet de gérer dns ce cas les erreurs.
Comme d'habitude on utilise un entête pour la requête
puis on peut envoyer un code d'erreur :  dans notre cas
le code 404 correspond à une page/route introuvable */

.use(function(req, res, next){
  res.writeHead(404,{"Content-Type":"text/html"});
  res.send('Page introuvable !');
});


/* Ici on se sert d'app pour écouter toutes les requêtes balancées sur le port 8080
Ce qui explique que si on tape localhost:8080 (dans notre cas) on arrive vers notre
application node. C'est le remplacement de http.createserver.
 */

app.listen(8080, function(){
  console.log('le serveur écoute sur le port 8080');
});
