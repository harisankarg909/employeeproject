var express=require('express');
var app = express();
var bodyparser=require('body-parser');
var session=require('express-session');
var hbars=require('express-handlebars');
var chalk=require('chalk');
//var db=require('./models/db.js');
var routes=require('./routes/routes.js');


app.use(express.static(__dirname + "/public"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.get('/employee', routes.getEmployee);
app.post('/employee', routes.addEmployee);
app.delete('/employee/:id', routes.delEmployee);


var port = process.env.PORT || 3000;
app.listen(port, function(){

    console.log('HTTP server is listening on port '+ port);
});