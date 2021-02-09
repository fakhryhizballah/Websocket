const WebSocket = require('ws');

// const fetch = require("node-fetch")
const ws = new WebSocket.Server({port:3000})


let countUserOnline = 0
ws.on("connection", client => {

    // client.on("message",function incoming(message){
    //     console.log(message)
    //     client.send("selamat datang")
    // })
    console.log("new connections")
    countUserOnline++;
    console.log("User Online", countUserOnline);
    const data1 = {
        user: countUserOnline,
        waktu:(new Date()).getTime(),
   };
   client.send(JSON.stringify(data1));
//    client.send(data1);


    client.on("close",() => {
        console.log("disconnect", countUserOnline);
        countUserOnline--;
        console.log("User Online", countUserOnline);
        const data1 = {
                 user: countUserOnline,
                 waktu:(new Date()).getTime(),
            }
        client.send(JSON.stringify(data1));
    });

    // client.on("message", data => {
    //    console.log(data);
    //    client.send(data);
    //      const data1 = {
    //         user: countUserOnline,
    //         waktu:(new Date()).getTime(),
    //     }
    //     client.send(JSON.stringify(data1));
    
    // });

    // client.on('pesan',function incoming(data){
    //     console.log(data1);
    //     ws.client.emit('pesan',data)
    // });

    // setInterval(function updateSelalu(){
    
    //     const data1 = {
    //         user: countUserOnline,
    //         waktu:(new Date()).getTime(),
    //     }
    //     client.send(JSON.stringify(data1))
    // },1000)
})