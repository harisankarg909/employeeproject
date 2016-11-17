var mongoose=require('mongoose');
var db=require('../models/db.js');
var EmployeeModel=mongoose.model('EmployeeModel');

exports.getEmployee=function(req,res){
    console.log('Inside get routes');
    //var data = {name:"Hari", age:"30"};
    //console.log("data"+data+"after stringify:"+JSON.stringify(data));
  //  res.send(JSON.stringify(data));
 mongoose.model('EmployeeModel').find(function(err, userObj){

res.send(userObj);
 });
 //res.send(JSON.stringify(data));
// res.send(data);
    //res.render('login.handlebars', {});
};


exports.addEmployee=function(req,res){
    console.log('Inside post routes');
    console.log(req.body);
    var name=req.body.name;
    var email=req.body.email;
    var date=req.body.date;
    var dep=req.body.dep;
    var gender=req.body.gender;
    var age=req.body.age;

    var newemp=new EmployeeModel;
    newemp.name=name;
    newemp.email=email;
    newemp.date=date;
    newemp.dep=dep;
    newemp.gender=gender;
    newemp.age=age;

    newemp.save(function(err, savedUser){

        if(err){
             var message = "A user already exists with that username or email";
         console.log(message);
         
         return;
        }else{
            console.log(savedUser);
        }
    });

   // res.send("got the request for post");

    
};


exports.delEmployee = function(req,res){
    console.log('Inside delete routes');
    var id = req.params.id;
    console.log("id is ; "+id);
    /*
    var newemp=new EmployeeModel;
    newemp.find({}, function(err, userObj){
        if(err){

        }else{
            console.log("with find : "+userObj);
        }
    });
    newemp.find({_id:id}, function(err, model){
        if(err){
            console.log("errored : "+err)
        }else{
            console.log("going to remove: "+model);
            model.remove(function(err){

            });
        }
    });
        */
        EmployeeModel.remove({_id:id}, function(err){
             if(err){
            console.log("errored : "+err)
        }else{
            

            }
        });
    
   
    };



    
