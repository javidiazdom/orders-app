const http = require('http').createServer();
const sqlite3 =  require('sqlite3').verbose();

var db = new sqlite3.Database('./db/orders.db');

const io = require('socket.io')(http, {
    cors: { origin: "*"}
});

//Esto es un test

io.on('connection', (socket) => {
    db.get("SELECT * FROM orders", (error, row) => {
        db.all("SELECT * FROM items WHERE order_id="+row.id, (error, rows) => {
            io.emit('data', JSON.stringify({order: row, items: rows}))
        })
    });
    
    socket.on('message', (message) => {
        io.emit('data', `${socket.id.substr(0,2)} said ${message}`);
    })
});

http.listen(8080, () => console.log('listening on http://localhost:8080'));
