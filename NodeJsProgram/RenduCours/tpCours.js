var express = require('express');
var session = require('cookie-session'); // Charge le middleware de sessions
var bodyParser = require('body-parser'); // Charge le middleware de gestion des paramètres
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var app = express();


/* On utilise les sessions */
app.use(session({secret: 'todotopsecret'}))

.get('/',function(req,res){
  res.render('home.ejs');
})
/* S'il n'y a pas de todolist dans la session,
on en crée une vide sous forme d'array avant la suite
On remarque aussi que l'on stocke ici le tableau de la todolist dals la variable
de session !.

ici le next() permet de passer automatiquement à la route suivante, dans notre cas,
il s'agit de /todo*/
.use(function(req, res, next){
    if (typeof(req.session.todolist) == 'undefined') {
        req.session.todolist = [];
    }
    next();
})
.get('/films', function(req,res) {
  res.render('home.ejs', {todolist: req.session.todolist});
})

/* Ici on a quelque chose de très intéressant c'est L'url encoded parser.
Cette variable, construite via le bodyparser. est un module qui permet de
récupérer des variables POST (en gros). Ducoup si la variable
newtodo n'est pas vide, alors on part dans la todolist stockée dans la session,
puis on push la valeur qui nous intéresse.

A noter que newtodo fait partie de l'input "newtodo", présent dans notre template,
et qui est par conséquent récupéré. */
.post('/films/add',urlencodedParser, function(req,res){
  if (req.body.newfilm != '') {
        req.session.todolist.push(req.body.newfilm);
    }
    res.redirect('/home');
})
/* Si la requête recue en paramètre n'est pas nulle, alors
on va agir sur le tableau stocké dans la variable de session.
Dans notre cas de suppression, on va "splice" le tableau, avec l'index
récupéré. Et une fois ceci fait on redirige vers todo

ATTENTION :  Il faut vraiment faire attention aux requpetes get et POST.
Si nos informations transitent par l'url, alors ce sera un .get
si c'est par la variable post, alors un utilisera une reqûete du même nom.

*/
.get('/films/delete/:id', function(req,res){
  if (req.params.id != '') {
        req.session.todolist.splice(req.params.id, 1);
    }
    res.redirect('/todo');
})
.use(function(req,res,next){
  res.writeHead(404,{"Content-Type":"text/html"});
  res.send(404,'Page introuvable !');
});

app.listen(8000,function(){
  console.log("Le seveur Todolist écoute sur le port 8000");
});
