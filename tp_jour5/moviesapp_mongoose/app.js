const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Configuration de view engine ejs
app.set('views','./views');
app.set('view engine','ejs');

//MiddleWare
app.use('/public',express.static('public'));
app.use(bodyParser.urlencoded({ extended : false}));

require('./lib/routes.js')(app);

app.listen(3000,function(){
  console.log('listening on port 3000');
});
