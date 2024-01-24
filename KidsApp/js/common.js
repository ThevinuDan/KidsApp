//page navigation script

var currentPage = 1;
document.getElementById("page1").classList.add("active");

function changePage(page) {
  if (speechSynthesis.speaking) {
    speechSynthesis.cancel();
  }
  var audioElement = document.getElementById("myAudio");
  if (audioElement && !audioElement.paused) {
    // If playing, pause the audio
    playPauseText.textContent = "Play";
    audioElement.pause();
  }
  document.getElementById("page" + currentPage).classList.remove("active");

  currentPage = page;
  document.getElementById("page" + currentPage).classList.add("active");
}
function goToChapter(chapter) {
  window.location.href = "/KidsApp/html/" + chapter + ".html";
}

function goToHome() {
  window.location.href = "/index.html";
}

// button click sound
var clickSound = document.createElement("audio");
clickSound.id = "clickSound";
clickSound.innerHTML =
  '<source src="/KidsApp/audio/click.mp3" type="audio/mp3"> Your browser does not support the audio element.';
document.body.appendChild(clickSound);
clickSound.volume = 0.2;

var victorySound = document.createElement("audio");
victorySound.id = "victorySound";
victorySound.innerHTML =
  '<source src="/KidsApp/audio/victory.mp3" type="audio/mp3"> Your browser does not support the audio element.';
document.body.appendChild(victorySound);
victorySound.volume = 0.5; // Adjust the volume as needed

function playClickSound() {
  clickSound.play();
}

function playVictorySound() {
  victorySound.play();
}

const speakAndHighlightText = (target) =>
  new Promise((resolve) => {
    const text = target.textContent;
    const originalHTML = target.innerHTML; // Save the original HTML content

    const utterance = new SpeechSynthesisUtterance();
    utterance.text = text;

    // Find the voice by name
    const voices = speechSynthesis.getVoices();
    const targetVoice = voices.find(
      (voice) =>
        voice.name === "Microsoft Emily Online (Natural) - English (Ireland)"
    );

    if (targetVoice) {
      utterance.voice = targetVoice;
    } else {
      // Fallback: if the target voice is not available, use default voice
      utterance.voice = voices[0];
    }

    utterance.addEventListener("boundary", ({ charIndex, charLength }) => {
      const beforeWord = text.slice(0, charIndex);
      const word = text.slice(charIndex, charIndex + charLength);
      const afterWord = text.slice(charIndex + charLength, text.length);

      target.innerHTML = `${beforeWord}<span style="background-color: var(--lavender); color:var(--baby-powder)">${word}</span>${afterWord}`;
    });

    utterance.addEventListener("end", () => {
      // Revert back to the original HTML content after speech ends
      target.innerHTML = originalHTML;
      resolve(target);
    });

    speechSynthesis.speak(utterance);
  });

// Modify this function to use the speakAndHighlightText function
function speakAllParagraphs(page) {
  // Get all <p> elements within the current page
  const paragraphs = document
    .getElementById("page" + page)
    .getElementsByTagName("p");

  // Convert the NodeList to an array for easy iteration
  const paragraphArray = Array.from(paragraphs);

  // Use async/await to speak each paragraph sequentially
  (async () => {
    for (const paragraph of paragraphArray) {
      await speakAndHighlightText(paragraph);
    }

    console.log("Finished speaking");
  })();
}
