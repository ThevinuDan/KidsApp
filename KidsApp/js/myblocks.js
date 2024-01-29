//The run Block
Blockly.Blocks["run_code"] = {
  init: function () {
    this.appendDummyInput().appendField("When Run ▶️");
    this.appendDummyInput().appendField(
      new Blockly.FieldImage("", 15, 15, { alt: "*", flipRtl: "FALSE" })
    );
    this.setNextStatement(true, null);
    this.setColour("#70eeae");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

//The Picture blocks
Blockly.Blocks["pic_full"] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldImage("", 180, 180, { alt: "*", flipRtl: "FALSE" })
    );
    this.setColour("#ffadad");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.Blocks["pic_half1"] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldImage("", 180, 90, { alt: "*", flipRtl: "FALSE" })
    );
    this.setNextStatement(true, null);
    this.setColour("#ffd6a3");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.Blocks["pic_half2"] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldImage("", 180, 90, { alt: "*", flipRtl: "FALSE" })
    );
    this.setPreviousStatement(true, null);
    this.setColour("#ffd6a3");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.Blocks["pic_quart1"] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldImage("", 180, 60, { alt: "*", flipRtl: "FALSE" })
    );
    this.setNextStatement(true, null);
    this.setColour("#c8ffbd");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.Blocks["pic_quart2"] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldImage("", 180, 60, { alt: "*", flipRtl: "FALSE" })
    );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#c8ffbd");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.Blocks["pic_quart3"] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldImage("", 180, 60, { alt: "*", flipRtl: "FALSE" })
    );
    this.setPreviousStatement(true, null);
    this.setColour("#c8ffbd");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.Blocks["code_blockM"] = {
  init: function () {
    this.appendDummyInput().appendField("Code Block");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#beb3ff");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.Blocks["code_block"] = {
  init: function () {
    this.appendDummyInput().appendField("Code Block");
    this.setPreviousStatement(true, null);
    this.setColour("#dda0dd");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

//The Cake Blocks
Blockly.Blocks["cake_step_1"] = {
  init: function () {
    this.appendDummyInput().appendField("Get Ingredients 🧈");
    this.appendDummyInput().appendField(
      new Blockly.FieldImage("", 15, 15, { alt: "*", flipRtl: "FALSE" })
    );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#f0b3ff");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.Blocks["cake_step_2"] = {
  init: function () {
    this.appendDummyInput().appendField("Mix 🥣");
    this.appendDummyInput().appendField(
      new Blockly.FieldImage("", 15, 15, { alt: "*", flipRtl: "FALSE" })
    );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#e3b3ff");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.Blocks["cake_step_3"] = {
  init: function () {
    this.appendDummyInput().appendField("Bake 🥘");
    this.appendDummyInput().appendField(
      new Blockly.FieldImage("", 15, 15, { alt: "*", flipRtl: "FALSE" })
    );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#d1b3ff");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.Blocks["cake_step_4"] = {
  init: function () {
    this.appendDummyInput().appendField("Decorate 🧁");
    this.appendDummyInput().appendField(
      new Blockly.FieldImage("", 15, 15, { alt: "*", flipRtl: "FALSE" })
    );
    this.setPreviousStatement(true, null);
    this.setColour("#beb3ff");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

//The Move Blocks
Blockly.Blocks["up"] = {
  init: function () {
    this.appendDummyInput().appendField("UP");
    this.appendDummyInput().appendField(
      new Blockly.FieldImage("", 15, 15, { alt: "*", flipRtl: "FALSE" })
    );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9ec3ff");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.Blocks["down"] = {
  init: function () {
    this.appendDummyInput().appendField("DOWN");
    this.appendDummyInput().appendField(
      new Blockly.FieldImage("", 15, 15, { alt: "*", flipRtl: "FALSE" })
    );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9ec3ff");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.Blocks["right"] = {
  init: function () {
    this.appendDummyInput().appendField("RIGHT");
    this.appendDummyInput().appendField(
      new Blockly.FieldImage("", 15, 15, { alt: "*", flipRtl: "FALSE" })
    );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9ec3ff");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
Blockly.Blocks["left"] = {
  init: function () {
    this.appendDummyInput().appendField("LEFT");
    this.appendDummyInput().appendField(
      new Blockly.FieldImage("", 15, 15, { alt: "*", flipRtl: "FALSE" })
    );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#9ec3ff");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

//loop blocks
//piano blocks
