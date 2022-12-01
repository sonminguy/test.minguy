const express = require('express');
const mongoose = require('mongoose');
const app = express();
const uri = "mongodb+srv://sonminguy:mandoo8403.@sonminguycluster0.lt0kvoa.mongodb.net/?retryWrites=true&w=majority"

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error);
    }
}

connect();
app.listen(8080, function() {
        console.log('listening on 8080');
});

app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html')
    });

app.get('/home', function(req,res){
res.sendFile(__dirname + '/index.html')
});

app.get('/write', function(req,res){
    res.sendFile(__dirname + '/write.html')
});
