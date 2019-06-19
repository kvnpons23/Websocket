const socket = io.connect('localhost:3002');

var user = document.getElementById('user'),
messageArea = document.getElementById('message-area'),
message = document.getElementById('message'),
form = document.getElementById('send-form');

const UsersDB = [
    {id: 1, name: 'Kevin'},
    {id: 2, name: 'Jen'}
]

form.addEventListener('submit',function(e){
    e.preventDefault();
    socket.emit('chat', { message : message.value, userId: user.value})
    message.value = "";
})

socket.on('chat', function(data){
    var messageClass = user.value == data.userId ? 'right-message' : 'left-message';
    messageArea.innerHTML += `<p class=${messageClass}><strong>${data.message}</strong></p>`
})

