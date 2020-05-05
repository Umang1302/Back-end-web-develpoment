var express = require("express");
var app = express();


app.get("/",function(req,res){
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal",function(req,res){
    var sounds ={
        pig:"Oink",
        cow:"Moo",
        dog:"Woof Woof"
    }
    var animal = req.params.animal;
        var sound = sounds[animal];
    res.send("The "+animal+" says "+sound);
});

app.get("/repeat/:string/:num",function(req,res){
    
    var string = req.params.string;
    var num=req.params.num;
    var repeat="";
    for(var i=0;i<num;i++){
        repeat+=" "+string;
    }
    res.send(repeat);
});

app.listen(process.env.PORT,process.env.IP, function(){
    console.log("SERVER HAS STARTED");
});