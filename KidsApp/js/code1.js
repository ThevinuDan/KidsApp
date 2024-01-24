var workspace1 = Blockly.inject("singleImage", {
  toolbox: document.getElementById("singleImage_toolbox"),
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
  width: 900,
  hieght: 500,
});
workspace1.addChangeListener(function (event) {
  // Check if the change is due to a block being moved or UI interaction
  if (event.type == Blockly.Events.MOVE || event.type == Blockly.Events.UI) {
    // Check if there is any block on the workspace
    var blockCount = workspace1.getAllBlocks().length;

    // If there is at least one block, show completion alert
    if (blockCount > 0) {
      console.log("win message show");
      alert("Congratulations! You snapped a block onto workspace1.");
    }
  }
});

var workspace2 = Blockly.inject("halfImage", {
  toolbox: document.getElementById("halfImage_toolbox"),
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
});
workspace2.addChangeListener(function (event) {
  // Check if the change is due to a block being moved or UI interaction
  if (event.type == Blockly.Events.MOVE || event.type == Blockly.Events.UI) {
    // Check if the event involves a block
    if (event.blockId) {
      var movedBlock = workspace2.getBlockById(event.blockId);

      // Check if the moved block is pic_half2
      if (movedBlock && movedBlock.type == "pic_half2") {
        // Check if there is a pic_half1 block above pic_half2
        var picHalf1Block = workspace2.getBlockById(
          movedBlock.previousConnection.targetBlock().id
        );

        if (picHalf1Block && picHalf1Block.type == "pic_half1") {
          alert(
            "Congratulations! You snapped a pic_half2 block under the pic_half1 block in workspace2."
          );
          // You can replace the alert with your desired completion message or action
        }
      }
    }
  }
});

var workspace3 = Blockly.inject("threeImage", {
  toolbox: document.getElementById("threeImage_toolbox"),
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
});
// Variables to track the presence of each block in the sequence
var picQuart1Present = false;
var picQuart2Present = false;
var picQuart3Present = false;

// Add change listener to workspace3
workspace3.addChangeListener(function (event) {
  // Check if the change is due to a block being moved or UI interaction
  if (event.type == Blockly.Events.MOVE || event.type == Blockly.Events.UI) {
    // Check if the event involves a block
    if (event.blockId) {
      var movedBlock = workspace3.getBlockById(event.blockId);

      // Check if the moved block is pic_quart1
      if (movedBlock && movedBlock.type == "pic_quart1") {
        picQuart1Present = true;
        checkCompletionW3();
      }

      // Check if the moved block is pic_quart2
      if (movedBlock && movedBlock.type == "pic_quart2") {
        // Check if there is a pic_quart1 block above pic_quart2
        var picQuart1Block = workspace3.getBlockById(
          movedBlock.previousConnection.targetBlock().id
        );

        if (picQuart1Block && picQuart1Block.type == "pic_quart1") {
          picQuart2Present = true;
          checkCompletionW3();
        }
      }

      // Check if the moved block is pic_quart3
      if (movedBlock && movedBlock.type == "pic_quart3") {
        // Check if there is a pic_quart2 block above pic_quart3
        var picQuart2Block = workspace3.getBlockById(
          movedBlock.previousConnection.targetBlock().id
        );

        if (picQuart2Block && picQuart2Block.type == "pic_quart2") {
          picQuart3Present = true;
          checkCompletionW3();
        }
      }
    }
  }
});

function checkCompletionW3() {
  if (picQuart1Present && picQuart2Present && picQuart3Present) {
    alert(
      "Congratulations! You snapped pic_quart2 under pic_quart1 and pic_quart3 under pic_quart2 in workspace3."
    ); // You can replace the alert with your desired completion message or action
  }
}

var workspace4 = Blockly.inject("cBlockDrop", {
  toolbox: document.getElementById("cBlockDrop_toolbox"),
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
});
workspace4.addChangeListener(function (event) {
  // Check if the change is due to a block being moved or UI interaction
  if (event.type == Blockly.Events.MOVE || event.type == Blockly.Events.UI) {
    // Check if there is any block on the workspace
    var blockCount = workspace4.getAllBlocks().length;

    // If there is at least one block, show completion alert
    if (blockCount > 0) {
      console.log("win message show");
      alert("Congratulations! You snapped a block onto workspace4.");
    }
  }
});

var workspace5 = Blockly.inject("cBlockDrop2", {
  toolbox: document.getElementById("cBlockDrop2_toolbox"),
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
});
workspace5.addChangeListener(function (event) {
  // Check if the change is due to a block being moved or UI interaction
  if (event.type == Blockly.Events.MOVE || event.type == Blockly.Events.UI) {
    // Check if the event involves a block
    if (event.blockId) {
      var movedBlock = workspace5.getBlockById(event.blockId);

      // Check if the moved block is pic_half2
      if (movedBlock && movedBlock.type == "code_block") {
        // Check if there is a pic_half1 block above pic_half2
        var run_codeBlock = workspace5.getBlockById(
          movedBlock.previousConnection.targetBlock().id
        );

        if (run_codeBlock && run_codeBlock.type == "run_code") {
          alert(
            "Congratulations! You snapped a code_block block under the run_block block in workspace5."
          );
        }
      }
    }
  }
});

var cBlockDrop2Start = document.getElementById("cBlockDrop2Start");
Blockly.Xml.domToWorkspace(cBlockDrop2Start, workspace5);

var workspace6 = Blockly.inject("cBlockDrop3", {
  toolbox: document.getElementById("cBlockDrop3_toolbox"),
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
});

var cBlockDrop2Start = document.getElementById("cBlockDrop3Start");
Blockly.Xml.domToWorkspace(cBlockDrop2Start, workspace6);

// Variables to track the presence of each block in the sequence
var codeBlockMPresent = false;
var runCodePresent = false;
var codeBlockPresent = false;

// Add change listener to workspace6
workspace6.addChangeListener(function (event) {
  // Check if the change is due to a block being moved or UI interaction
  if (event.type == Blockly.Events.MOVE || event.type == Blockly.Events.UI) {
    // Check if the event involves a block
    if (event.blockId) {
      var movedBlock = workspace6.getBlockById(event.blockId);

      // Check if the moved block is run_code
      if (movedBlock && movedBlock.type == "run_code") {
        runCodePresent = true;
        checkCompletionW6();
      }

      // Check if the moved block is code_blockM
      if (movedBlock && movedBlock.type == "code_blockM") {
        // Check if there is a run_code block above code_blockM
        var runCodeBlock = workspace6.getBlockById(
          movedBlock.previousConnection.targetBlock().id
        );

        if (runCodeBlock && runCodeBlock.type == "run_code") {
          codeBlockMPresent = true;
          checkCompletionW6();
        }
      }

      // Check if the moved block is code_block
      if (movedBlock && movedBlock.type == "code_block") {
        // Check if there is a code_blockM block above code_block
        var codeBlockMBlock = workspace6.getBlockById(
          movedBlock.previousConnection.targetBlock().id
        );

        if (codeBlockMBlock && codeBlockMBlock.type == "code_blockM") {
          codeBlockPresent = true;
          checkCompletionW6();
        }
      }
    }
  }
});

function checkCompletionW6() {
  if (runCodePresent && codeBlockMPresent && codeBlockPresent) {
    alert("Congratulations! You arranged the blocks correctly in workspace 6.");
    // You can replace the alert with your desired completion message or action
  }
}
