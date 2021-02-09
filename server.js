const WebSocket = require('ws');

// const fetch = require("node-fetch")
const wss = new WebSocket.Server({port:3000})

let data_dari_stasiun= {}
let countUserOnline = 0

wss.on("connection", function incoming(ws, req){

    console.log("new connections")
    countUserOnline++;
    console.log("User Online", countUserOnline);

    ws.on("close",() => {
        console.log("disconnect", countUserOnline);
        countUserOnline--;
        console.log("User Online", countUserOnline);
    })

    ws.on("message",function incoming(message){
     
        const data = JSON.parse(message)
        data_dari_stasiun = data;

        console.log(req.socket.remoteAddress  , data)
        ws.send("data diterima")
        ws.send(JSON.stringify(data_dari_stasiun))

    });

    


})