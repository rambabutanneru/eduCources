
var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.get('/',  function(req,res,next) {  
  res.sendFile(__dirname+'/index.html');
});

app.set('port', process.env.PORT || 1440);
var server = app.listen(app.get('port'), function() {
	console.log("Edu Cources App runing on PORT:"+app.get('port'));	
});
