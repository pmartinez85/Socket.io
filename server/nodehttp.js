var server = require('http').createServer();
var io = require('socket.io')(server);
io.on('connection', function(client){
    client.on('event', function(data){


        console.log('new connection revceived');

        //todo
    });
    client.on('disconnect', function(){

        //todo
    });
});
server.listen(3001);