const custodians = {
  aurelian: {
    name: "Aurelian Voss",
    replies: [
      "The stars do not command you. They reflect you.",
      "Astrology is a language of cycles and archetypes.",
      "Observe the pattern before seeking the meaning."
    ]
  },
  rowan: {
    name: "Rowan Ashveil",
    replies: [
      "Ritual begins with intention, not action.",
      "Magic is the shaping of attention.",
      "Ethics are the foundation of all spellwork."
    ]
  },
  lorien: {
    name: "Lórien the Archivist",
    replies: [
      "Language is memory given sound.",
      "Elvish tongues were shaped for song and story.",
      "Every word carries a history."
    ]
  },
  maelduin: {
    name: "Maelduin of the Hollow Oak",
    replies: [
      "Gaelic remembers the land itself.",
      "A language holds a people’s breath.",
      "Speak slowly. Meaning follows patience."
    ]
  },
  kael: {
    name: "Kael the Veiled",
    replies: [
      "The inner realms are entered gently.",
      "Do not seek escape—seek understanding.",
      "Stillness is the true gateway."
    ]
  }
};

function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");
  const custodianKey = document.getElementById("custodianSelect").value;

  if (!input.value.trim()) return;

  // User message
  chatBox.innerHTML += `
    <div class="message user">
      <strong>You:</strong> ${input.value}
    </div>
  `;

  // Custodian reply
  const custodian = custodians[custodianKey];
  const reply =
    custodian.replies[Math.floor(Math.random() * custodian.replies.length)];

  setTimeout(() => {
    chatBox.innerHTML += `
      <div class="message custodian">
        <strong>${custodian.name}:</strong> ${reply}
      </div>
    `;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 600);

  input.value = "";
}
