const Film = module.require('./models/Films');
const FilmService = module.require('./services/film-service.js');

module.exports = function(app){

filmService = new FilmService(Film);

  /////////////////////Accueil/////////////////////////////////
  app.get('/',function(req,res){
    res.render('index');
    // res.send('<h1>Hello world avec nodemon</h1>');
  });

/////////////////////Liste de films/////////////////////////////////
  app.get('/films', function(req,res){
    const title = 'Liste de films connus';

    //Gestion de l'appel de service ou sera traité la couche d'appel
    //à la base de données
    //Evennement Asyncrone
    //Necessité de faire appel à une Promise
    //pour gérer le temps de réponse de mongoose et effectuer
    // la réponse au client.
    filmService.findAll()
    .then(films => {
        console.log(films);
        res.render('films',{films:films,title:title});
    })
    .catch(error => {
        console.log(error);
        res.sendStatus(500);
    });

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

  /////////////////////Ajouter un film/////////////////////////////////
  app.post('/films',function(req,res){
    // res.status(200);
    console.log('/films => body = ', req.body);

    const newFilm = new Film({
        title: req.body.title,
        year: req.body.title
    });
    // {title: req.body.title,year: req.body.title};

    filmService.addFilm(newFilm)
    .then( film => {
          res.status(200);
          res.send(JSON.stringify(film));
          console.log('User saved successfully!');
    })
    .catch(error => {
        throw err;
        console.log(error);
        res.sendStatus(500);
    });

  });


  app.post('/api/film/delete', function(req,res){
    res.send({'status':200});
  });

};
