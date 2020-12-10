const socket = io('ws://localhost:8080');

socket.on('data', data => {
    const orders = JSON.parse(data)
    const div = document.createElement('div')
    div.innerHTML = data;
    document.querySelector('#pedidos').innerHTML = div.innerHTML;

});

document.querySelector('button').onclick = () => {
    const text = document.querySelector('input').value;

    socket.emit('message', text);
}