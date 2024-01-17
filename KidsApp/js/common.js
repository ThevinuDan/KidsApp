function preloadFonts() {
  var fontNames = [
    "Comicy.woff2",
    "MaryKate.woff2",
    "TarifArabic-Bold.woff2",
    "TarifArabic-Regular.woff2",
  ];

  for (var i = 0; i < fontNames.length; i++) {
    var font = new FontFace(
      "CustomFont",
      `url('/KidsApp/fonts/${fontNames[i]}')`,
      {}
    );
    document.fonts.add(font);
  }
}
preloadFonts();

//page navigation script
var currentPage = 1;

function changePage(page) {
  document.getElementById("page" + currentPage).style.display = "none";
  currentPage = page;
  document.getElementById("page" + currentPage).style.display = "flex";
}

function goToChapter(chapter) {
  window.location.href = "/KidsApp/html/" + chapter + ".html";
}

function goToHome() {
  window.location.href = "/index.html";
}
document.getElementById("page1").style.display = "flex";

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
// Add this function to your JavaScript
function speakAllParagraphs(page) {
  // Get all <p> elements within the current page
  var paragraphs = document
    .getElementById("page" + page)
    .getElementsByTagName("p");

  // Iterate through each <p> tag
  Array.from(paragraphs).forEach(function (paragraph, index) {
    // Speak the text of the paragraph
    var text = paragraph.innerText;

    // Create a new SpeechSynthesisUtterance
    var utterance = new SpeechSynthesisUtterance();
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

    // Play the synthesized speech
    speechSynthesis.speak(utterance);
  });
}
