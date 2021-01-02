// Use this as a macro in foundry when you need to migrate (usually after a DND5e system update)

let features = game.packs.get("beyond-20-compendiums.features");
features.migrate();

let items = game.packs.get("beyond-20-compendiums.items");
items.migrate();

let monsterFeatures = game.packs.get("beyond-20-compendiums.monster-features");
monsterFeatures.migrate();

let monsters = game.packs.get("beyond-20-compendiums.monsters");
monsters.migrate();

let npcs = game.packs.get("beyond-20-compendiums.npcs");
npcs.migrate();

let players = game.packs.get("beyond-20-compendiums.players");
players.migrate();

let spells = game.packs.get("beyond-20-compendiums.spells");
spells.migrate();