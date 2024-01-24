//button and background change
document.getElementById("red-btn").addEventListener("click", function () {
  document.getElementById("page5").style.backgroundColor = "#ffadad";
});
document.getElementById("orange-btn").addEventListener("click", function () {
  document.getElementById("page5").style.backgroundColor = "#ffd6a5";
});
document.getElementById("yellow-btn").addEventListener("click", function () {
  document.getElementById("page5").style.backgroundColor = "#fdffb6";
});
document.getElementById("green-btn").addEventListener("click", function () {
  document.getElementById("page5").style.backgroundColor = "#caffbf";
});
document.getElementById("blue-btn").addEventListener("click", function () {
  document.getElementById("page5").style.backgroundColor = "#9bf6ff";
});
document.getElementById("indigo-btn").addEventListener("click", function () {
  document.getElementById("page5").style.backgroundColor = "#a0c4ff";
});
document.getElementById("violet-btn").addEventListener("click", function () {
  document.getElementById("page5").style.backgroundColor = "#bdb2ff";
});
document.getElementById("pink-btn").addEventListener("click", function () {
  document.getElementById("page5").style.backgroundColor = "#ffc6ff";
});

document.addEventListener("keydown", function (event) {
  // Check if the pressed key is a letter (A-Z)
  if (event.key.match(/^[a-zA-Z]$/)) {
    // Get the image URL for the corresponding letter
    var imageUrl = "/KidsApp/img/" + event.key.toUpperCase() + ".png";

    // Update the imageContainer with the new image
    document.getElementById(
      "alphabetImg"
    ).innerHTML = `<img src="${imageUrl}" alt="${event.key.toUpperCase()} letter image">`;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var audio = document.getElementById("myAudio");
  var playPauseButton = document.getElementById("playPauseButton");
  var playPauseText = document.getElementById("playPauseText");
  var volumeSlider = document.getElementById("volume-slider");
  var waveformDiv = document.getElementById("waveform");

  playPauseButton.addEventListener("click", function () {
    if (audio.paused) {
      audio.play();
      playPauseText.textContent = "Pause";
    } else {
      audio.pause();
      playPauseText.textContent = "Play";
    }
  });

  // Set initial volume
  updateVolume();

  // Update volume when the slider is moved
  volumeSlider.addEventListener("input", function () {
    updateVolume();
  });

  audio.addEventListener("play", function () {
    visualize();
  });

  function updateVolume() {
    // Map the range of the slider (0-10) to the range expected by audio.volume (0-1)
    audio.volume = volumeSlider.value / 10;
    document.getElementById("rangeValue").innerHTML = volumeSlider.value;
  }
  // to visualize sound waves
  function visualize() {
    var context = new (window.AudioContext || window.webkitAudioContext)();
    var analyser = context.createAnalyser();
    var source = context.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(context.destination);

    analyser.fftSize = 256;
    var bufferLength = analyser.frequencyBinCount;
    var dataArray = new Uint8Array(bufferLength);

    var canvas = document.createElement("canvas");
    var canvasCtx = canvas.getContext("2d");
    waveformDiv.innerHTML = "";
    waveformDiv.appendChild(canvas);

    canvas.width = waveformDiv.clientWidth;
    canvas.height = waveformDiv.clientHeight;

    function draw() {
      analyser.getByteFrequencyData(dataArray);

      canvasCtx.fillStyle = "rgb(255, 255, 250)";
      canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

      var barWidth = (canvas.width / bufferLength) * 2.5;
      var barHeight;
      var x = 0;

      for (var i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];

        canvasCtx.fillStyle = "rgb(124, 115, 222)";
        canvasCtx.fillRect(
          x,
          canvas.height - barHeight / 2,
          barWidth,
          barHeight / 2
        );

        x += barWidth + 1;
      }

      requestAnimationFrame(draw);
    }

    draw();
  }
});

const Emily = document.getElementById("Emily");
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

function startTalkingEmily() {
  // Display the "listen" image when starting to listen
  speakImage.style.zIndex = "initial";
  listenImage.style.zIndex = "initial";
  stillImage.style.zIndex = "initial";
  listenImage.style.zIndex = "2";

  // Create a new SpeechRecognition instance
  recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition)();
  recognition.onstart = () => {
    console.log("starting listening, speak into the microphone");
  };
  recognition.onspeechend = () => {
    console.log("stopped listening");
    stillImage.style.zIndex = "2";
  };
  recognition.onresult = (result) => {
    const transcribedText = result.results[0][0].transcript;
    console.log(transcribedText);

    // Use the transcribed text for text-to-speech
    speakText(transcribedText);

    // Stop recording after speech synthesis is completed
    recognition.stop();
  };

  // Start recording
  recognition.start();
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
    // Display the "speak" image when speech starts
    stillImage.style.zIndex = "initial";
    speakImage.style.zIndex = "2";
  });

  // When the speech ends, update the image back to the still image
  utterance.addEventListener("end", function () {
    stillImage.style.zIndex = "2";
  });

  // Play the synthesized speech
  speechSynthesis.speak(utterance);
}
