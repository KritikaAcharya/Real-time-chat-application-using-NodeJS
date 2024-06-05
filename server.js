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

// socket.io setup 

const io = require("socket.io")(server);

io.on("connection", (socket) => {
    console.log(socket.id);
});

server.listen(port,()=>{
    console.log("server started at "+port );
})