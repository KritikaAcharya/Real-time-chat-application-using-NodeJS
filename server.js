const http = require("http");
const express = require("express");
const exp = require("constants");

const app = express();

const server = http.createServer(app);
const port = process.env.PORT || 3000;

app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})

server.listen(port,()=>{
    console.log("server started at "+port );
})