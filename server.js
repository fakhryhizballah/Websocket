const WebSocket = require('ws');

// const fetch = require("node-fetch")
const ws = new WebSocket.Server({port:3000})


let data_dari_stasiun= {}
let countUserOnline = 0
ws.on("connection", function incoming(client, req){

    // client.on("message",function incoming(message){
    //     console.log(message)
    //     client.send("selamat datang")
    // })
    console.log("new connections")
    countUserOnline++;
    console.log("User Online", countUserOnline);

    client.on("close",() => {
        console.log("disconnect", countUserOnline);
        countUserOnline--;
        console.log("User Online", countUserOnline);
    })

    client.on("message",function incoming(message){
       
    })


})