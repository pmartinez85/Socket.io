var socket = require('socket.io-client')('http://localhost:3000');
socket.on('connect', function(){

    console.log('new connection received on localhost port 3000');

});

socket.on('event', function(data){


});

socket.on('disconnect', function(){

    console.log('disconnected on localhost port 3000');


});