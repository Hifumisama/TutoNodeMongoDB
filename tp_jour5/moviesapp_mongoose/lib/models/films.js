const mongoose = require('mongoose');
// mongoose.promise = require('bluebird');
mongoose.Promise = Promise;//Here use promise es6(EcMAScript2015)
//http://exploringjs.com/es6/ch_promises.html#sec_examples-promises
mongoose.connect('mongodb://127.0.0.1:27017/myappdatabase');

var Schema = mongoose.Schema;

var filmSchema = new Schema({
  title:{type:String,require:true},
  year:{type:String,require:true},
  resume:String
})

var Film = mongoose.model('Film', filmSchema);


module.exports = Film;
