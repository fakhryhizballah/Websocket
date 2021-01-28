const WebSocket = require('ws');

const ws = new WebSocket("ws://localhost:3000")

ws.on('open', function open() {
    // ws.send('halo');
});

ws.on('message', (data) => {
    console.log(data);
});

setInterval(function updateSelalu(){
    
    const data = {
        air: 1000,
        waktu:(new Date()).getTime(),
        stasiun:0
    }
    ws.send(JSON.stringify(data))
},1000)