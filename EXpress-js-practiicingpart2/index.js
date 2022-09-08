var express = require('express');
//application level middleware
var app = express();

app.use(function(req,res,next){
    console.log("I am application level middleware");
    next();
});

//route level middleware
// app.use('/about',function(req,res,next){
//     console.log("I am application level middleware");
//     next();
// });

app.get('/',function(req,res){
    res.send("This is Home Page");
});
app.get('/about',function(req,res){
    res.send("This is about Page");
});





//Multiple Form Data manage>>
// var multer = require('multer');
// var multer = multer();

// var app = express();
// app.use(multer.array());
// app.use(express.static('public'));

// app.post("/multer",function(req,res){
//     let jsonData = req.body;
//     res.send(JSON.stringify(jsonData));
// });

// app.listen(3000,function(){
//     console.log("Server send successfully....")
// });




//JSON DATA MANAGE>>
// var bodyParser = require('body-parser')

// app = express();
// app.use(bodyParser.json());

// app.post("/json",function(req,res){
//     let jsonData = req.body;
//     let jsonstring = JSON.stringify(jsonData);
//     res.send(jsonstring);
// });

app.listen(8000,function(){
    console.log("Server send successfully....")
});
