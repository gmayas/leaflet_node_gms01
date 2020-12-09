const map = L.map('map');

var socket = io(); //Global variable io, the server connects and returns a socket to send and listen to events.

map.locate({ enableHighAccuracy: true });

map.on('locationfound', e => {
    const { lat, lng } = e.latlng;
    let coords = [lat, lng];
    map.setView(coords, 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> by GMayaS © 2020.'
    }).addTo(map);
    L.marker(coords).addTo(map)
        .bindPopup('You are here.')
        .openPopup();
    socket.emit('userCoordinates', coords) //Emite un evento del socket
    // Se escucha el evento userCoordinates y s ecreo un marcador nuevo.
    socket.on('newUserCordinates', (coords) =>{
        console.log('newUserCordinates: ', coords);
        L.marker(coords).addTo(map)
        .bindPopup('New user connected.')
        .openPopup();
    }); 
});





