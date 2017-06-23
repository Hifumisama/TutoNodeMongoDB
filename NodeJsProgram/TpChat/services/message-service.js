const mongoose = require('mongoose');

var MessageService = function(model) {

  //Crud findAll
  this.findAll = function() {
    console.log('Appel messageService Find All');
    return new Promise(
      function(resolve, reject) {
        model.find({}, (err, messages) => {
          if (err) {
            reject(err);
          } else {
            resolve(messages);
          }
        });
      })
  }

  this.addMessage = function(message) {
    console.log('Appel MessageService addMessage');
    return new Promise(
      function(resolve, reject) {
        message.save((err) => {
          if (err) {
            reject(err);
          } else {
            resolve(message);
          }
        });
      })
  }

}

module.exports = MessageService;
