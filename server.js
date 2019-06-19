const express = require('express');
var socket = require('socket.io');

var app = express();

const port = process.env.PORT || 3002;

var server = app.listen(port, function(){
    console.log(`Server is listening to :${port}`)
});

app.use(express.static('public'));

var io = socket(server);



io.on('connection',function(socket){
    socket.on('chat',function(data){
        console.log(data)
        io.sockets.emit('chat', data)
    })
})


