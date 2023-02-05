# Character Generator Program
This program was a project given to me by Codecademy. The purpose of this project was to generate output to the user consisting of at least three items, each randomized. I decided to make a character generator that heavily uses `Math.random` to generate some stats and then looks through a few arrays to generate a name and a short bio for the character.

## To Do List:
  * look into turning the entire script into a single factory function
  * may add an "evaluation" that determines what the character would be good or bad at
  * add alignments (good, neutral, evil) (chaotic, neutral, lawful) (neutral + neutral = true neutral)
  * look into changing the way bios are generated so that the class within the bio makes sense for the generated stats

## Goals:
the program will generate a Fantasy world character (think DnD or video game) sheet
This character sheet will be an output in the console (for now) that includes a name, a bio, and stats.

the output will start with a name followed by a short bio then the stats for the character generated.

### Stats:
  * Name
  * Biography
  * Luck (has an affect on all other rolls)
  * Strength
  * Vitality (for health)
  * Dexterity
  * Agility (for stunts)
  * Intelligence
  * Wisdom (for focus)
  * Charisma

  #### Vitality, Agility, and Wisdom
  Vitality and wisdom are both tied to their "parent" stats. so vitality (or health, stamina, etc.) is heavily influenced by the character's strength. Wisdom (or mana, focus, etc.) is heavily influenced by the character's intelligence. This is done to ensure that a character with high strength and low intelligence does not end up with more wisdom than vitality. Agility works in the same fashion, influenced by Dexterity.