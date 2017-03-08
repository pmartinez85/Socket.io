var io = require('socket.io')();
io.on('connection', function(client){

    console.log('new connection revceived');
});
io.listen(3000);