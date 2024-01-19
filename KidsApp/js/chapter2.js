function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function start(e) {
  e.dataTransfer.effectAllowed = "move"; // Set the effect to move (default)
  e.dataTransfer.setData("Text", e.target.id); // Get the element to be moved
  e.target.style.opacity = "0.4";
}

/**
 * Function executed when the dragging of the element is finished.
 **/
function end(e) {
  e.target.style.opacity = ""; // Restore the element's opacity
  e.dataTransfer.clearData("Data");
}

/**
 * Function executed when a draggable element enters the calling element.
 **/
function enter(e) {
  return true;
}

/**
 * Function executed when a draggable element is over the calling element.
 * Returns false if the object can be dropped in that element, and true otherwise.
 **/
function over(e) {
  if (e.target.className == "pieceContainer" || e.target.id == "pieceContainer")
    return false;
  else return true;
}

/**
 * Function executed when a draggable element is dropped on the calling element.
 **/
function drop(e) {
  e.preventDefault(); // Prevent the default action of the dropped element.
  var draggedElement = e.dataTransfer.getData("Text");
  e.target.appendChild(document.getElementById(draggedElement)); // Place the dropped element on the calling element
  checkPuzzle();
}

function checkPuzzle() {
  var pieces = ["piece1", "piece2", "piece3", "piece4", "piece5", "piece6"];

  var allPiecesInValidContainers = pieces.every(function (pieceId) {
    var currentPieceContainerId =
      document.getElementById(pieceId).parentNode.id;
    return ["one", "two", "three", "four", "five", "six"].includes(
      currentPieceContainerId
    );
  });

  if (allPiecesInValidContainers) {
    // Your code for when all pieces are in valid containers
    var winMessage = document.createElement("div");
    winMessage.id = "winMessage";
    winMessage.innerHTML = "HOORAY YOU WIN";

    // Append the win message to the puzzle container
    document.getElementById("puzzleContainer").appendChild(winMessage);
    playVictorySound();
    launchConfetti();
  }
}

function checkBrowser() {
  if (
    navigator.userAgent.toLowerCase().indexOf("msie ") > -1 ||
    (navigator.userAgent.toLowerCase().indexOf("safari") > -1 &&
      navigator.userAgent.toLowerCase().indexOf("chrome") == -1)
  ) {
    alert(
      "Your browser does not correctly support HTML5 Drag & Drop functions. Please try another browser."
    );
  }
}

function resetPuzzle() {
  // Remove the win message if it exists
  var winMessage = document.getElementById("winMessage");
  if (winMessage) {
    winMessage.parentNode.removeChild(winMessage);
  }

  // Reset the puzzle piece positions
  var pieces = document.querySelectorAll(".pieceContainer img");
  var puzzleContainer = document.getElementById("pieceContainer");

  // Shuffle the pieces randomly
  pieces = Array.from(pieces);
  shuffleArray(pieces);

  // Move each piece back to the original container
  pieces.forEach(function (piece) {
    puzzleContainer.appendChild(piece);
  });
}

function start2(e) {
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("Text", e.target.id);
  e.target.style.opacity = "0.4";
}

function end2(e) {
  e.target.style.opacity = "";
  e.dataTransfer.clearData("Data");
}

function enter2(e) {
  return true;
}

function over2(e) {
  if (
    e.target.className == "pieceContainer" ||
    e.target.id == "pieceContainer2"
  )
    return false;
  else return true;
}

function drop2(e) {
  e.preventDefault();
  var draggedElement = e.dataTransfer.getData("Text");
  e.target.appendChild(document.getElementById(draggedElement));
  checkPuzzle2();
}

function checkPuzzle2() {
  var pieces = ["piece1", "piece2", "piece3", "piece4", "piece5", "piece6"];

  var allPiecesInValidContainers = pieces.every(function (pieceId) {
    var currentPieceContainerId =
      document.getElementById(pieceId).parentNode.id;
    return ["one", "two", "three", "four", "five", "six"].includes(
      currentPieceContainerId
    );
  });

  if (allPiecesInValidContainers) {
    var winMessage = document.createElement("div");
    winMessage.id = "winMessage2";
    winMessage.innerHTML = "CONGRATULATIONS! PUZZLE 2 COMPLETED";

    document.getElementById("puzzleContainer2").appendChild(winMessage);
    playVictorySound();
    launchConfetti();
  }
}

function resetPuzzle2() {
  var winMessage = document.getElementById("winMessage2");
  if (winMessage) {
    winMessage.parentNode.removeChild(winMessage);
  }

  var pieces = document.querySelectorAll(".pieceContainer2 img");
  var puzzleContainer = document.getElementById("pieceContainer2");
  pieces = Array.from(pieces);
  shuffleArray(pieces);

  pieces.forEach(function (piece) {
    puzzleContainer.appendChild(piece);
  });
}
