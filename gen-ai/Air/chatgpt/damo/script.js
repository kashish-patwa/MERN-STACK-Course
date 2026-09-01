const input = document.getElementById("message-input");
const sendBtn = document.getElementById("send-btn");
const inputArea= document.querySelector(".input-area")
const welcomeScreen = document.querySelector(".welcome-screen")

let currentConversationId = null;
//  console.log(currentConversationId)
// =======================
// Event Listeners
// =======================

sendBtn.addEventListener("click", sendMessage);

input.addEventListener("keydown", (e) => {


if (e.key === "Enter") {
    sendMessage();
}


});

// =======================
// Send Message
// =======================

async function sendMessage() {

inputArea.style.position="static"

welcomeScreen.style.display="none"

console.log(currentConversationId)
// getting user input or prompt
const text = input.value.trim();

if (text === "") return;

// show user prompt
showMessage(text, "user");

input.value = "";
input.focus();

// show typing indicator
showTypingIndicator();

try {

    // make API call to backend
    const response = await fetch("/chat", {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            prompt: text,
            conversationId: currentConversationId
        })
    });

    const data = await response.json();

    currentConversationId = data.conversationId;


    removeTypingIndicator();

    // show AI response
    showMessage(data.result, "AI");
}
catch (error) {

    console.log(error);

    removeTypingIndicator();

}


}

// =======================
// Add Message To UI
// =======================

function showMessage(text, role) {


const message = document.createElement("div");

message.classList.add(
    "message",
    role
);

const avatar =
    role === "user"
        ? "👤"
        : "🤖";

message.innerHTML = `
    <div class="avatar">
        ${avatar}
    </div>

    <div class="message-content">
        ${text}
    </div>
`;

messages.appendChild(message);

messages.scrollTop =
    messages.scrollHeight;


}

// =======================
// Typing Indicator
// =======================

function showTypingIndicator() {

const typing =
    document.createElement("div");

typing.classList.add(
    "message",
    "ai"
);

typing.id = "typing-indicator";

typing.innerHTML = `
    <div class="avatar">
        🤖
    </div>

    <div class="message-content">
        Typing...
    </div>
`;

messages.appendChild(typing);

messages.scrollTop =
    messages.scrollHeight;


}

function removeTypingIndicator() {


const typing =
    document.getElementById(
        "typing-indicator"
    );

if (typing) {
    typing.remove();
}


}