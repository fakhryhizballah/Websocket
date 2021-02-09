const WebSocket = require('ws');

// const fetch = require("node-fetch")
const wss = new WebSocket.Server({port:3000})

let data_dari_stasiun= {}
let countUserOnline = 0

wss.on("connection", function incoming(client, req){

    console.log("new connections")
    countUserOnline++;
    console.log("User Online", countUserOnline);

    client.on("close",() => {
        console.log("disconnect", countUserOnline);
        countUserOnline--;
        console.log("User Online", countUserOnline);
    })

    client.on("message",function incoming(message){
        const data = JSON.parse(message)
        data_dari_stasiun = data;

        console.log(req.socket.remoteAddress  , data)
        client.send("data diterima")
        client.send(JSON.stringify(data_dari_stasiun))
    })

    setInterval(function updateKeClient(){
        client.send(JSON.stringify(data_dari_stasiun))
    },1000)


})