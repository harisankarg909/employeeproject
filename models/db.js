var mongoose=require('mongoose');
var chalk=require('chalk');

var dbURI = 'mongodb://harisankarg909:twister909@ds149567.mlab.com:49567/remotemongo_hari'
//var dbURI = 'mongodb://192.168.0.101:27017/test';
console.log("Establishing connection to the DB");
mongoose.connect(dbURI);

mongoose.connection.on('connected', function(){
    console.log(chalk.green('Mongoose connected to ' + dbURI));
});

mongoose.connection.on('err', function(){
    console.log(chalk.red('Mongoose connection error: ' + err));
});

mongoose.connection.on('disconnected', function () {
  console.log(chalk.red('Mongoose disconnected'));
});

var employeeSchema = new mongoose.Schema({
    name: {type: String, unique: true},
    email: String,
    date: String,
    dep: String,
    gender: String,
    age: String,
}, {collection: 'employees'});


mongoose.model('EmployeeModel', employeeSchema);