
// ==========================================
// CHATBOT LOGIC
// ==========================================

function addUser(text) {
  const chatBox = document.getElementById("chat-box");
  if (!chatBox) return;

  chatBox.insertAdjacentHTML("beforeend", `<div class="user">${text}</div>`);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function addBot(text) {
  const chatBox = document.getElementById("chat-box");
  if (!chatBox) return;

  chatBox.insertAdjacentHTML("beforeend", `<div class="bot">${text}</div>`);
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function askQuestion(e) {
  if (e) e.preventDefault();

  const questionInput = document.getElementById("question");
  if (!questionInput) return;

  let q = questionInput.value.trim();
  if (q === "") return;

  addUser(q);
  questionInput.value = "";
  addBot("Thinking...");

  try {
    let response = await fetch("/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: q, message: q }),
    });

    let data = await response.json();
    let bots = document.querySelectorAll(".bot");

    if (bots.length > 0) {
      let lastBot = bots[bots.length - 1];
      if (data.answer) {
        lastBot.textContent = data.answer;
      } else {
        lastBot.textContent =
          "I couldn't find this information in my knowledge base.";
      }
    }
  } catch (error) {
    console.error("Chat Error:", error);
    let bots = document.querySelectorAll(".bot");
    if (bots.length > 0) {
      bots[bots.length - 1].textContent = "Server error. Please try again.";
    }
  }
}

function clearChat() {
  const chatBox = document.getElementById("chat-box");
  const questionInput = document.getElementById("question");

  if (chatBox) {
    chatBox.innerHTML = `
            <div class="bot">
                👋 Hello! I am <b>MedFit AI</b>.<br>Ask me anything from my medical knowledge base.
            </div>
        `;
  }
  if (questionInput) questionInput.value = "";
}

// Event Listeners for Chat
document.addEventListener("click", function (e) {
  const target = e.target;
  if (!target) return;

  // Send Button
  if (target.id === "sendBtn" || target.closest("#sendBtn")) {
    askQuestion(e);
  }
  // Clear / New Chat
  if (target.id === "clearBtn" || target.id === "newChat") {
    clearChat();
  }
  // "Try Asking" Examples Click Handler
  if (
    target.classList.contains("example-item") ||
    target.closest(".examples li")
  ) {
    const questionInput = document.getElementById("question");
    if (questionInput) {
      questionInput.value = target.textContent.trim();
      askQuestion(e);
    }
  }
});

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter" && e.target && e.target.id === "question") {
    askQuestion(e);
  }
});
