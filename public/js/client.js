const socket = io();

var username;
var chats=document.querySelector(".chats")


username=prompt("enter your username: ");


socket.emit("new-user-joined",username);

socket.on('user-connected',(socket_name)=>{
    userJoinLeft(socket_name,"joined");
});

function userJoinLeft(name,status){
    let div=document.createElement("div");
    div.classList.add('users-join');
    let content=`<p><b>${name}</b> ${status} the chat </p>`;
    div.innerHTML=content;
    chats.appendChild(div);
}