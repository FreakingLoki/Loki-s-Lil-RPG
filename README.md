# Character Generator Program
This program was a project given to me by Codecademy. The purpose of this project was to generate output to the user consisting of at least three items, each randomized. I decided to make a character generator that heavily uses `Math.random` to generate some stats and then looks through a few arrays to generate a name and a short bio for the character.

## To Do List:
  * look into turning the entire script into a single factory function
  * may add an "evaluation" that determines what the character would be good or bad at
  * look into changing the way bios are generated so that the class within the bio makes sense for the generated stats

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

  #### Possible Classes
    * Warrior: high strength and vitality
    * Rouge: high dexterity and charisma
    * Wizard: high intelligence and wisdom
    * Paladin: middling strength and intelligence
    * Bard: high charisma
    * Cleric: high intelligence and charsima
    * Ranger: high dexterity and low charisma
    * Sorcerer: high intelligence and low charisma
    * Warlock: very high wisdom
    * Druid: high intelligence and vitality
    * Fighter: middling strength and high vitality
    * Archer: very high dexterity
    * Barbarian: very high strength low charisma
    * Thief: high dexterity and high agility
    * Warlord: high strength and high charsima
    * Illusionist: high intelligence and high dexterity
    * Party Animal: very high charisma

#### Stat Ranges
  maximum level for normal stats is 100. minimum is 0.
  0-20 = very low
  21-40 = low
  41-60 = middling
  61-80 = high
  81-100 = very hihgh