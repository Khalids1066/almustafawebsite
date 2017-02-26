//required modules
var express = require('express');
//require local files
var app = express();
app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendfile('index.html');
});

app.listen(5000, function(){
  console.log('5000');
});