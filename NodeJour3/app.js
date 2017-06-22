const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Configuration de view engine ejs
app.set('views','./views');
app.set('view engine','ejs');

//MiddleWare
app.use('/public',express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/',function(req,res){
  res.render('index');
  // res.send('<h1>Hello world avec nodemon</h1>');
});

const data = [
  {id:1,title:'Il était une fois en Amérique', year:1984},
  {id:2,title:'Les affranchis', year:1990},
  {id:3,title:'Le dernier Roi d\'Ecosse', year:2006},
  {id:4,title:'Le Seigneur des Anneaux', year:2001}
];

app.get('/films', function(req,res){
  const title = 'Liste de films connus';
  res.render('films',{films:data,title:title});
  // res.send('Next : Amazing page !!!');
});

app.get('/films/add', (req,res) => {
  res.send('Bientôt un formulaire....');
});

app.get('/films/:id', function(req,res){
  const id = req.params.id;
  var title = 'Voici mon titre';

  console.log(`req.params = ${JSON.stringify(req.params)}`);
  //Template literals
  console.log(`film n°${id}`);
  res.render('film-detail',{filmId:id,monTitle:title});
  // res.send(`film n°${id}`);
});


app.get('/films/:id/:param2', function(req,res){
  const id = req.params.id;
  console.log(`req.params = ${JSON.stringify(req.params)}`);
  console.log('param2 = ', req.params.param2);
  //Template literals
  console.log(`film n°${id}`);
  res.send(`film n°${id}`);
});

app.post('/films',function(req,res){
  //201 =creation
  console.log('req.body = ',req.body);
  const taille = data.length + 1;
  var idObj = taille;

  const newFilm = {id : idObj, title : req.body.title, year : req.body.year};
  data.push(req.body);
  console.log(data);
  res.sendStatus(200);

});


app.listen(3000,function(){
  console.log('listening on port 3000');
});
