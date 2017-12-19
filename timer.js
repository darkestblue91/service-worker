const timer = setInterval(sendMessage, 1000);


function sendMessage() {
    const date = new Date();
    document.getElementById("timer").innerHTML = date.toLocaleTimeString();
}

