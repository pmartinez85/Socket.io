var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
io.on('connection', function(){

    //TODOO
    console.log('new connection revceived');


});
server.listen(3002);