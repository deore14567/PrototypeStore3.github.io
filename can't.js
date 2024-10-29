// can't.js

const mainMessage = document.getElementById("mainMessage");
const subMessage = document.getElementById("subMessage");
const message = "Never buy this...";

let index = 0;
function typeMessage() {
  if (index < message.length) {
    mainMessage.textContent += message.charAt(index);
    index++;
    setTimeout(typeMessage, 100); // Typing speed
  } else {
    setTimeout(() => subMessage.classList.remove("hidden"), 1000);
  }
}

// Start typing animation
typeMessage();
