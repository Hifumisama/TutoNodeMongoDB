const mongoose = require('mongoose');

var FilmService = function(model){

  //Crud findAll
  this.findAll = function(){
    console.log('appel FilmService findAll');
    return new Promise(
        function (resolve, reject) {
          model.find({},(err,films) => {
            if(err){
              reject(err);
            }else {
              resolve(films);
            }
          });
    })
  }

  this.addFilm = function(film){
    console.log('appel FilmService addFilm');
    return new Promise(
        function (resolve, reject) {
          film.save((err) => {
            if (err) {
              reject(err);
            }else {
              resolve(film);
            }
        });
    })
  }

}



  // Film.find({},function(err,films){
  //     if(err) {
  //       throw err;
  //       res.sendStatus(500);
  //     }
  //     // console.log('/films => films = ', films);
  //     console.log('/films => films = Avant render');
  //
  //     res.render('films',{films:films,title:title});
  //   })


  // readFile(filename, { encoding: 'utf8' },
  //     (error, data) => {
  //         if (error) {
  //             reject(error);
  //         } else {
  //             resolve(data);
  //         }
  //     });
  // });

module.exports = FilmService;
