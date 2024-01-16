function stopCar() {
  document.getElementById("car").style.animationPlayState = "paused";
}

function goCar() {
  document.getElementById("car").style.animationPlayState = "running";
}
function toggleLight() {
  var checkbox = document.querySelector(".t__checkbox");
  var lightImage = document.getElementById("lightImage");

  if (checkbox.checked) {
    // Checkbox is checked, turn on the light
    lightImage.src = "on.jpg"; // Replace 'on.jpg' with the path to your lit light image
    document.getElementById("page5").style.backgroundColor = "#fff";
    document.getElementById("page5").style.color = "#000";
    // Change background color to white or any desired color
  } else {
    // Checkbox is unchecked, turn off the light
    lightImage.src = "off.jpg"; // Replace 'off.jpg' with the path to your unlit light image
    document.getElementById("page5").style.backgroundColor = "#000";
    document.getElementById("page5").style.color = "#fff";
    // Restore background color to default
  }
}

// Call toggleLight() once when the page loads to set the initial state
toggleLight();
