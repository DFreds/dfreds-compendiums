/*
This file reads in all the lines of beyond-monsters.db and changes the token size based on the size of the monster.
It then outputs these changes to a beyond-monsters.db file in the top level. Manually copying and replacing this file
over the old beyond-monsters.db is necessary.

NOTE: This means that this needs to be rerun whenever a new monster is added!

Changes are as follows:

Tiny: 0.5 width, 0.5 height, 0.5 scale
Small: 0.5 width, 0.5 height
Medium: No changes (1 width, 1 height)
Large: 2 width, 2 height
Huge: 3 width, 3 height
Gargatuan: 4 width, 4 height

Gargatuan won't always be correct, as most of these monster can be even larger. Still, it's a good approximation for this script.

*/

// Run with node token-size-script.js from root
const fs = require("fs");

// Read the file and make the token changes
fs.readFile("packs/beyond-monsters.db", (err, data) => {
  if (err) throw err;

  let lines = data.toString().split("\n");
  let newLines = "";

  for (let index = 0; index < lines.length; index++) {
    const line = lines[index];

    if (line == undefined || line == "") break;

    let monsterJson = JSON.parse(line);
    let size = monsterJson.data.traits.size;

    if (size === "tiny") {
      monsterJson.token.width = 0.5;
      monsterJson.token.height = 0.5;
      monsterJson.token.scale = 0.5;
    } else if (size === "sm") {
      monsterJson.token.width = 0.5;
      monsterJson.token.height = 0.5;
      monsterJson.token.scale = 1;
    } else if (size === "lg") {
      monsterJson.token.width = 2;
      monsterJson.token.height = 2;
      monsterJson.token.scale = 1;
    } else if (size === "huge") {
      monsterJson.token.width = 3;
      monsterJson.token.height = 3;
      monsterJson.token.scale = 1;
    } else if (size === "grg") {
      // Note, tokens at this size might need to be fine tuned. This is too small for a tarrusque, for instance
      monsterJson.token.width = 4;
      monsterJson.token.height = 4;
      monsterJson.token.scale = 1;
    }

    newLines += JSON.stringify(monsterJson) + "\n";
  }

  // Write the new token changes
  fs.writeFile("beyond-monsters.db", newLines, (err) => {
    if (err) throw err;
  });
});
