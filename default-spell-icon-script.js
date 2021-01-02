/*
This file reads in all the lines of dfreds-spells.db and changes the default spell icon from the unfurled scroll to the ones provided here.
It then outputs these changes to the specified file in the top level. Manually copying and replacing this file over the old file is necessary.

NOTE: This means that this needs to be rerun whenever a new spell is added!

*/

// Run with node token-size-script.js from root
const fs = require("fs");

const fileName = "dfreds-spells-homebrew.db";

// Read the file and make the token changes
fs.readFile("packs/" + fileName, (err, data) => {
  if (err) throw err;

  let lines = data.toString().split("\n");
  let newLines = "";

  for (let index = 0; index < lines.length; index++) {
    const line = lines[index];

    if (line == undefined || line == "") break;

    let spellJson = JSON.parse(line);

    if (!spellJson.img.endsWith("scroll-unfurled.svg")) {
      newLines += JSON.stringify(spellJson) + "\n";
      continue;
    }

    let initialFilePath =
      "modules/dfreds-compendiums/images/spell-defaults/";

    if (spellJson.data.school === "abj") {
      spellJson.img = initialFilePath + "abjuration.png";
    } else if (spellJson.data.school === "con") {
      spellJson.img = initialFilePath + "conjuration.png";
    } else if (spellJson.data.school === "div") {
      spellJson.img = initialFilePath + "divination.png";
    } else if (spellJson.data.school === "enc") {
      spellJson.img = initialFilePath + "enchantment.png";
    } else if (spellJson.data.school === "evo") {
      spellJson.img = initialFilePath + "evocation.png";
    } else if (spellJson.data.school === "ill") {
      spellJson.img = initialFilePath + "illusion.png";
    } else if (spellJson.data.school === "nec") {
      spellJson.img = initialFilePath + "necromancy.png";
    } else if (spellJson.data.school === "trs") {
      spellJson.img = initialFilePath + "transmutation.png";
    }

    newLines += JSON.stringify(spellJson) + "\n";
  }

  // Write the new token changes
  fs.writeFile(fileName, newLines, (err) => {
    if (err) throw err;
  });
});
