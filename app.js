const express = require('express');
const bodyparser=require('body-parser');
const getdate = require('./date');
const app= express();
app.set('view engine','ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
var items=[];
var workitem=[];
const PORT= process.env.PORT || 3000;

const date=require(__dirname+"/date.js");

app.get("/",function(req,res){

   var day=date();

    res.render('lists',{listTitle:day,newlistitems:items});
})

app.get("/work",function(req,res){

    res.render("lists",{listTitle:"work list",newlistitems:workitem})
})
app.get("/about",function(req,res){
    res.render("about");
})

app.post("/",function(req,res){

    
    var item=req.body.newItem;
    console.log(req.body);

    if(req.body.button==="work"){
        workitem.push(item);
        res.redirect("/work");
    }else{
        
    items.push(item);   
    res.redirect("/");
    }

})


app.post("/work",function(req,res){
    let item=req.body.newItem;
    workitem.push(item);
    res.redirect("/work");

})

app.listen(PORT,function(){
    console.log("server online at port 3000");
})