module.exports = io => {
    io.on('connection', (socket) => {
        console.log('New User Connected.');
        //Se escucha el evento emitido userCoordinates. 
        socket.on('userCoordinates', (coords) => {
            console.log('userCoordinates: ', coords);
            //Se transmite y emite a todos los usuarios conectados
            socket.broadcast.emit('newUserCordinates', coords);
        });
        socket.on('disconnect', () => {
            console.log('User disconnect');
        });
    });
};