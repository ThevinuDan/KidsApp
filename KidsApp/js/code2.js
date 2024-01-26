const myTheme = Blockly.Theme.defineTheme("myTheme", {
  blockStyles: {
    default: {
      colourPrimary: "#ffc7ff",
    },
  },

  fontStyle: {
    family: "content", // Change the font family
    weight: "normal", // Change the font weight (e.g., bold, normal)
    size: 16, // Change the font size
  },
});

var workspace1 = Blockly.inject("bake_steps", {
  toolbox: document.getElementById("bake_steps_toolbox"),
  grid: {
    spacing: 20,
    length: 3,
    colour: "#ccc",
    snap: false,
  },
  move: {
    scrollbars: {
      horizontal: false,
      vertical: false,
    },
    drag: false,
    wheel: false,
  },
  trashcan: true,
  theme: myTheme,
});

var bake_steps_start = document.getElementById("bake_steps_start");
Blockly.Xml.domToWorkspace(bake_steps_start, workspace1);
