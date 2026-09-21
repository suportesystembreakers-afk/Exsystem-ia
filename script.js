const messages = document.getElementById("messages");
const input = document.getElementById("messageInput");


function addMessage(text, type) {

    const message = document.createElement("div");

    message.className = "message " + type;

    if (type === "bot") {

        message.innerHTML = `
            <div class="avatar">🤖</div>

            <div class="bubble">
                ${text}
            </div>
        `;

    } else {

        message.innerHTML = `
            <div class="avatar">👤</div>

            <div class="bubble">
                ${text}
            </div>
        `;

    }

    messages.appendChild(message);

    messages.scrollTop = messages.scrollHeight;
}


function sendMessage() {

    const text = input.value.trim();

    if (!text) return;

    addMessage(text, "user");

    input.value = "";

    setTimeout(() => {

        addMessage(
            "🤖 Recebi sua mensagem!<br><br>" +
            "A conexão com o modelo de IA será adicionada na próxima etapa. " +
            "Nesta versão estamos preparando a interface da SYSTEM BREAKERS IA.",
            "bot"
        );

    }, 700);
}


function quickMessage(text) {

    input.value = text;

    sendMessage();

}


input.addEventListener("keydown", function(event) {

    if (event.key === "Enter" && !event.shiftKey) {

        event.preventDefault();

        sendMessage();

    }

});
