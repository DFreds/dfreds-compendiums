# DFreds Compendiums 

To use this module, simply navigate to the Add-on Modules tab, click Install Module, and paste in the link to the module.json (https://raw.githubusercontent.com/DFreds/dfreds-compendiums/master/module.json)

## Initial Setup

1. Start up Foundry VTT app
1. Install the dfreds-compendiums add on (this thing)
1. Install the vtta-tokenizer add-on module
1. Install the plutonium module: https://wiki.5e.tools/index.php/FoundryTool_Install
1. Create a world solely for the generation using DND 5e
1. Enable the dfreds-compendiums, vtta-tokenizer, and plutonium modules in the generator world
1. Navigate to Compendiums, right click and unlock all of the DFreds compendiums
1. Go to the Plutonium configuration menus and make the Plutonium changes below.
1. Go to Game Settings -> Configure Game Settings -> Module Settings, and make the tokenizer changes below.

### Plutonium

* Import
  * Add Page Numbers to Source: Enable
  * Duplicate Handling Mode: Update Existing
* Import (Creatures)
  * Token Bar Display Mode: Owner Hover
* Import (Vehicles)
  * Token Bar Display Mode: Owner Hover
  * Enable Token Vision: Disable

### Virtual Tabletop Assets - Tokenizer

* Default Character frame: [data] modules/vtta-tokenizer/img/default-frame-pc.png
* Default NPC frame: /modules/vtta-tokenizer/img/default-frame-npc.png
* Avatar/Token upload directory: [data] modules/dfreds-compendiums/images/tokenizer
* Token size: 400

## Adding Items to the Module

1. Start up your generator world and log in with the initial Gamemaster
1. Utilize plutonium to import items into the compendium. For more information, see their site.

### Notes on Spells

If you add a new spell, it will likely not have an icon. We're using the generic icon from DND Beyond. You can utilize the `default-spell-icon-script.js` with node to generate a new dfreds-spells.db and dfreds-spells-homebrew file. Ensure that Node is installed on your command line, and do the following steps:

1. Open terminal and navigate to this compendium's folder.
1. Run `node default-spell-icon-script.js`
1. Copy the new `dfreds-spells.db` and `dfreds-spells-homebrew.db` to the packs folder and overwrite the file.

## Using the Tokenizer

The tokenizer is an incredibly powerful tool for creating tokens. You can use it to find images via your personal computer or the internet, and it'll copy it into a profile and token image. If configured correctly, it will upload it to this module's tokenizer folder.

To add a new token:

1. Open the Actor sheet straight from the compenedium and click the image in the top left
1. Find an appropriate image. Typically, they should be a hand-drawn type image. If it's online, just right click it and copy the image source URL.
1. Next to add layer, choose the appropriate icon depending on how you found the image. Click OK.
1. Delete the old layer on the left by hitting the trash icon.
1. On the right, click the first icon on Add Layer to add the avatar images to the layers
1. Move the new layer down and delete the old layer. Keep the token outline.
1. Adjust the image by unlocking it to zoom in and move it around to center it in the new layer. You can also use the eyedropper to change the background to match something in the image.
1. When done, click OK

## Map Information

* Waterdeep Noir - from Rats of Waterdeep
  * Background: modules/michaelghelfi/ambience/RainAndThunder.mp3
  * Music: modules/michaelghelfi/music/BeyondTheFrostBarrier.mp3
* The Crime Scene - from Rats of Waterdeep
  * Background: modules/michaelghelfi/ambience/RainAndThunder.mp3
  * Music: modules/music-d20-sampler/city/grimdocks.mp3
* Harbor Holdings - from Rats of Waterdeep
  * Background: modules/michaelghelfi/ambience/RainAndThunder.mp3
  * Music: modules/music-d20-sampler/city/grimdocks.mp3
* Doctor Ward's Apothecary - from Rats of Waterdeep
  * Background: modules/michaelghelfi/ambience/RainAndThunder.mp3
  * Music: modules/music-d20-sampler/city/grimdocks.mp3
* The Secret Laboratory - from Rats of Waterdeep
  * Music: modules/music-d20-sampler/combat/blynkas-temper.mp3, modules/music-d20-sampler/combat/streets-of-iron-and-blood.mp3
* The Temple of Rot - from Rats of Waterdeep
  * Background: modules/michaelghelfi/ambience/RainAndThunder.mp3
  * Music: modules/music-d20-sampler/city/grimdocks.mp3
* The Sewers - from Rats of Waterdeep
  * Background: modules/michaelghelfi/ambience/Sewers.mp3
  * Music: modules/music-d20-sampler/dungeon/ritual-deep-dark-and-wet.mp3
* The Salvation Parade - from Rats of Waterdeep
  * Background: modules/michaelghelfi/ambience/RainAndThunder.mp3
  * Music: modules/music-d20-sampler/combat/streets-of-iron-and-blood.mp3
* Foil the Xanathar - from Rats of Waterdeep
  * Background: modules/michaelghelfi/ambience/RainAndThunder.mp3
  * Music: modules/music-d20-sampler/combat/streets-of-iron-and-blood.mp3
* Ibrido City Square - from A Night of Masks And Monsters
  * Background: modules/dndAudioBundle-HammerHome/src/Hammer_Home/Docks%20of%20Hammer%20Home.ogg
  * Music: modules/music-d20-sampler/calm/shape-water.mp3
* Castel di Maschera - from A Night of Masks And Monsters
  * Music: modules/dndAudioBundle-HammerHome/src/Hammer_Home/Foolish%20Head%20Inn.ogg
* Secret Laboratory - from A Night of Masks And Monsters
* Cathedral - from Labyrinth of Thorns
  * Music: modules/adventuremusic/backgrounds/DisturbanceInTheTemple.mp3
* Labyrinth - from Labyrinth of Thorns
  * Music: modules/music-d20-sampler/dungeon/voidsoul-temple.mp3
  * Combat music: modules/adventuremusic/battles/ItsAllLedUpToThis.mp3
* Library
* Into the Trees
  * Background: modules/dndAudioBundle-HammerHome/src/Hammer_Home/Haunted%20Forest.ogg
  * Music: modules/tabletop-rpg-music/music/13.%20Dreamscape.mp3
* Library Destroyed
  * Background: modules/michaelghelfi/ambience/GenericDungeonI.mp3
  * Music: modules/adventuremusic/backgrounds/Somber.mp3
* Skyhorn Lighthouse - from The Secrets Of Skyhorn Lighhouse
  * Music: modules/tabletop-rpg-music/music/5.%20Beneath%20the%20Waves.mp3
* Skyhorn Lighthouse Caves - from The Secrets Of Skyhorn Lighhouse
  * Music: modules/tabletop-rpg-music/music/5.%20Beneath%20the%20Waves.mp3
* The Annabel Lee - from The Secrets Of Skyhorn Lighhouse
  * Background: modules/dndAudioBundle-HammerHome/src/Hammer_Home/Docks%20of%20Hammer%20Home.ogg
  * Music: modules/music-d20-sampler/calm/shape-water.mp3
* The Docks - from The Secrets Of Skyhorn Lighhouse
  * Background: modules/dndAudioBundle-HammerHome/src/Hammer_Home/Docks%20of%20Hammer%20Home.ogg
  * Music: modules/music-d20-sampler/calm/shape-water.mp3