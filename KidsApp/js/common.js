//page navigation script
var currentPage = 1;

function changePage(page) {
  document.getElementById("page" + currentPage).style.display = "none";
  currentPage = page;
  document.getElementById("page" + currentPage).style.display = "flex";
}

function goToChapter(chapter) {
  window.location.href = chapter + ".html";
}
document.getElementById("page1").style.display = "flex";

// button click sound
var clickSound = document.createElement("audio");
clickSound.id = "clickSound";
clickSound.innerHTML =
  '<source src="/audio/click.mp3" type="audio/mp3"> Your browser does not support the audio element.';
document.body.appendChild(clickSound);
clickSound.volume = 0.2;

var victorySound = document.createElement("audio");
victorySound.id = "victorySound";
victorySound.innerHTML =
  '<source src="/audio/victory.mp3" type="audio/mp3"> Your browser does not support the audio element.';
document.body.appendChild(victorySound);
victorySound.volume = 0.5; // Adjust the volume as needed

function playClickSound() {
  clickSound.play();
}

function playVictorySound() {
  victorySound.play();
}
