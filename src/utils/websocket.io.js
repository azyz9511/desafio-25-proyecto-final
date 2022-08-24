const io = require('../../server');

io.on('connection',async (socket) => {

    socket.on('probando', data => {
        console.log(data);
    })

    
});