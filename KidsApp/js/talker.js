// Microsoft Emily Online (Natural) - English (Ireland)
const tom = document.getElementById("tom");
const stillImage = document.getElementById("still");
const listenImage = document.getElementById("listen");
const speakImage = document.getElementById("speak");

let recognition;
let utterance;

// Preload voices when the page loads
window.speechSynthesis.onvoiceschanged = function () {
  // Start your application after voices are loaded
  startApplication();
};

function startApplication() {
  console.log("Voices are loaded. You can start your application now.");
  // Example: Call your initialization function here
}

function startTalkingTom() {
  speakImage.style.zIndex = "initial";
  listenImage.style.zIndex = "initial";
  stillImage.style.zIndex = "initial";
  listenImage.style.zIndex = "2";

  // Create a new SpeechRecognition instance
  recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition)();
  recognition.onstart = () => {
    console.log("starting listening, speak in microphone");
  };
  recognition.onspeechend = () => {
    console.log("stopped listening");
    recognition.stop();
  };
  recognition.onresult = (result) => {
    const transcribedText = result.results[0][0].transcript;
    console.log(transcribedText);

    // Use the transcribed text for text-to-speech
    speakText(transcribedText);
  };

  // Start recording
  recognition.start();

  // Set a 5-second timeout to stop recording
  setTimeout(() => {
    recognition.stop();
  }, 8000);
}

function speakText(text) {
  // Create a new SpeechSynthesisUtterance
  utterance = new SpeechSynthesisUtterance();
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

  // When the speech starts, update the image to "speaking.gif"
  utterance.addEventListener("start", function () {
    setTimeout(function () {
      speakImage.style.zIndex = "2";
    }, 500); // Adjust the delay as needed
  });

  // When the speech ends, update the image back to the still image
  utterance.addEventListener("end", function () {
    stillImage.style.zIndex = "2";
  });

  // Play the synthesized speech
  speechSynthesis.speak(utterance);
}
