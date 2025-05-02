const socket = io()
const clientsTotal = document.getElementById('clients-total');
const messageContainer = document.getElementById('message-conainer');
const nameInput = document.getElementById('message-input');
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');

messageForm.addEventListener('submit', (e) => {
e.preventDefault()
sendMessage()
})

socket.on('client-total' , (data) => {
 console.log(data)
 clientsTotal.innerText = `total clients : ${data}`
})


function sendMessage() {
    console.log(messageInput.value)
    const data = {
        name:nameInput.value,
        message : messageInput.value,
        dateTime : new Date(),

    }
    socket.emit('message', data)
}

socket.on('chat-message', (data) => {
    console.log(`this data come from server: ${data}`);
});
