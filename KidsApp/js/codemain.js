// Define available blocks
const blocks = [
  { type: "gather", label: "Gather Ingredients", image: "gather_image.png" },
  { type: "mix", label: "Mix Ingredients", image: "mix_image.png" },
  { type: "bake", label: "Bake", image: "bake_image.png" },
  { type: "decorate", label: "Decorate", image: "decorate_image.png" },
];

function createBlockElements(containerId) {
  const container = document.getElementById(containerId);
  blocks.forEach((block) => {
    const blockElement = document.createElement("div");
    blockElement.className = "block";
    blockElement.textContent = block.label;
    blockElement.draggable = true;
    blockElement.dataset.type = block.type;

    blockElement.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", block.type);
    });

    container.appendChild(blockElement);
  });
}

function deleteBlocks() {
  const workspace = document.getElementById("workspace");
  workspace.innerHTML = ""; // Remove all child elements from the workspace
}

// Run the code
function runCode() {
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = "";

  const blockElements = document
    .getElementById("workspace")
    .querySelectorAll(".block");

  // Define the expected sequence
  const expectedSequence = ["gather", "mix", "bake", "decorate"];

  // Check if the user's sequence matches the expected one
  const userSequence = Array.from(blockElements, (el) => el.dataset.type);
  const isCorrectSequence =
    JSON.stringify(userSequence) === JSON.stringify(expectedSequence);

  // Display the user's sequence with separators
  userSequence.forEach((blockType, index) => {
    const blockImage = blocks.find((block) => block.type === blockType).image;

    const imgElement = document.createElement("img");
    imgElement.src = blockImage;
    imgElement.alt = blocks.find((block) => block.type === blockType).label;

    outputElement.appendChild(imgElement);

    // If it's the last block and it's the correct sequence, add the Winner message
    if (index === userSequence.length - 1 && isCorrectSequence) {
      const winnerImage = document.createElement("img");
      winnerImage.src = "winner_image.png"; // Replace with the path to your winner image
      winnerImage.alt = "Winner!";
      outputElement.appendChild(winnerImage);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  createBlockElements("blockbox");
  initializeWorkspace();
});

function initializeWorkspace() {
  const workspace = document.getElementById("workspace");

  workspace.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  workspace.addEventListener("drop", (event) => {
    event.preventDefault();
    const blockType = event.dataTransfer.getData("text/plain");
    const blockElement = document.createElement("div");
    blockElement.className = "block";
    blockElement.textContent = blocks.find(
      (block) => block.type === blockType
    ).label;
    blockElement.dataset.type = blockType;

    blockElement.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", blockType);
    });

    workspace.appendChild(blockElement);
  });
}
