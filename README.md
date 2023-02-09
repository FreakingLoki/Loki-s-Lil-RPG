# Character Generator Program
This program was a project given to me by Codecademy. The purpose of this project was to generate output to the user consisting of at least three items, each randomized. I decided to make a character generator that heavily uses `Math.random` to generate some stats and then looks through a few arrays to generate a name and a short bio for the character.

## To Do List:
  * add a randomizer for race
  * look into turning the entire script into a single factory function
  * may add an "evaluation" that determines what the character would be good or bad at


## Goals:
the program will generate a Fantasy world character (think DnD or video game) sheet
This character sheet will be an output in the console (for now) that includes a name, a bio, and stats.

the output will start with a name followed by a short bio then the stats for the character generated.

### Stats:
  * Name
  * Biography
  * Luck (affects all other rolls)
  * Strength
  * Vitality (for health)
  * Dexterity
  * Agility (for stunts)
  * Intelligence
  * Wisdom (for focus)
  * Charisma

  #### Vitality, Agility, and Wisdom
  Vitality and wisdom are both tied to their "parent" stats. so vitality (or health, stamina, etc.) is heavily influenced by the character's strength. Wisdom (or mana, focus, etc.) is heavily influenced by the character's intelligence. This is done to ensure that a character with high strength and low intelligence does not end up with more wisdom than vitality. Agility works in the same fashion, influenced by Dexterity.

  #### Possible Classes (sorted by highest main stat)
  STR:
  * Barbarian: secondary stat is low CHA
  * Warrior: secondary stat is high DEX
  * Paladin: secondary stat is high INT
  * Warlord: secondary stat is high CHA
  * Fighter: default if STR is highest main stat

    DEX:
  * Archer: secondary stat is high STR
  * Ranger: secondary stat is low CHA
  * Rogue: secondary stat is high CHA
  * Thief: default if DEX is highest main stat

  INT:
  * Wizard: secondary stat is low STR
  * Warlock: secondary stat is high STR
  * Druid: secondary stat is low DEX
  * Illusionist: secondary stat is high DEX
  * Sorcerer: default if INT is highest main stat

  CHA:
  * Party Animal: secondary stat is high LCK
  * Cleric: secondary stat is high INT
  * Bard: default if CHA is highest main stat
    

#### Stat Ranges
  maximum level for normal stats is 100. minimum is 0:\
  0-20 = very low\
  21-40 = low\
  41-60 = middling\
  61-80 = high\
  81-100 = very high

  max level for complex stats is 210 and the minimum is 20:\
  20-56 = very low\
  56-92 = low\
  92-128 = middling\
  128-164 = high\
  164-210 = very high\