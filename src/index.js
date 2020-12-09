const express =  require ('express');
const http = require('http');
const socketIO = require('socket.io');
const engine = require ('ejs-mate');
const path = require('path');

//initializations
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

//settings
app.set('port', process.env.PORT || 3100);
app.engine('ejs', engine);
app.set('views', path.join(__dirname, 'views')); //determine the location of the ejs files
app.set('view engine', 'ejs'); //initializing ejs

//routes
app.use(require('./routes/routes'));

//static files
app.use(express.static(path.join(__dirname, 'public'))); //determine the location of the public files

//sockets
require('./sockets')(io);

//starting the server
server.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});