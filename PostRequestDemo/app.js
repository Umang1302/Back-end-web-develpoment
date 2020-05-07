var express = require("express");
var app = express();
var bodyParser=require("body-parser");
  app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs");

var arr = ["tony", "jack","pop","opps"];
 

app.get("/",function(req,res){
   res.render("home");
});

app.post("/addfriend",function(req,res){
   var newFriend = req.body.newfriend;
   arr.push(newFriend);
   res.redirect("/friends");
 });

app.get("/friends",function(req,res){
 
    res.render("friend",{arr : arr});

});


app.listen(3000,function(){
	console.log("SERVER IS SERVING");
})