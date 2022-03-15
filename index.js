const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port=9000;

const url="mongodb://localhost:27017";

mongoose.connect(url,{useNewurlParser:true});
const con=mongoose.connection;
app.use(express.json());
try{
    con.on('open',()=>{
        console.log('Connected sucessfully');
    })
}catch(error){
    console.log("Error"+error);
}

const studentrouter=require("./routes/student");
app.use('./students',studentrouter)

app.listen(port,()=>{
    console.log('Server started');
})
