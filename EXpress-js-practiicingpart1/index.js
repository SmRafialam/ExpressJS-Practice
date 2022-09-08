var express= require('express');

app = express();

//simple string response
app.get("/one",function(req,res){
    res.send("This is simple string response");
});
app.post("/one",function(req,res){
    res.end("This is simple string response");
});

//Status code response
app.get("/three",function(req,res){
    res.status(201).end();
});
app.post("/four",function(req,res){
    res.status(401).end("unauthorized...");
});

//Json response
app.get("/five",function(req,res){
    let MyJsonArray = [
        {
            Name:"Rafi",
            Country:"Bangladesh",
            Occupation:"Eng."
        },
        {
            Name:"Joseph",
            Country:"NY",
            Occupation:"Doctor"
        },
        {
            Name:"Mafi",
            Country:"India",
            Occupation:"Dancer"
        },
    ]
    res.json(MyJsonArray);
});

//download response
app.get("/six",function(req,res){
    res.download("./uploads/abc.jpg")
});

//response redirect
app.get("/Pakistan",function(req,res){
    res.redirect("http://localhost:8000/Bangladesh")
});
app.get("/Bangladesh",function(req,res){
    res.send("This is East Bengal");
});

//Response header
app.get("/seven",function(req,res){
    res.append("Name","Rafi");
    res.append("City","Dhaka");
    res.append("Age","20");

    res.status(201).end("Hello World");
});

//Response cookies
app.get("/eight",function(req,res){
    res.cookie('Name','Rafi')
    res.cookie('City','Dhaka')
    res.cookie('Age','20')
//clearCookis for clear the cookies
    res.end("Cookie sent success....");
});

//Request URL Query
app.get("/nine",function(req,res){
    let firstName = req.query.firstName;
    let secondName = req.query.secondName;

    res.end(firstName+ " " +secondName);

});

// response status 
app.post("/about",function(req,res){
    res.send("This is about Page");
});
app.put("/contact",function(req,res){
    res.send("This is contact Page");
});
app.delete("/terms",function(req,res){
    res.send("This is terms Page");
});

app.listen(8000, function(){
    console.log("Server Run Success....");
});