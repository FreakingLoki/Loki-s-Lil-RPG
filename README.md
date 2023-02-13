# Character Generator Program
This program was a project given to me by Codecademy. The purpose of this project was to generate output to the user consisting of at least three items, each randomized. I decided to make a character generator that heavily uses `Math.random()` to generate some stats and then looks through a few arrays to generate a name and a short bio for the character. Currently there are 24 possible character classes. Each class has five possible biographies. 

## To Do List:
  * Add character abilities based on their class
  * add a function that gets the character's overall level (some sort of average or something... not sure what this will look like yet)
  * Add an enemy generator that scales the enemy to the player
  * Add images for each class (this is a maybe)
  * Add turn based combat (this is a long term goal)




## Goals:
The program will generate a Fantasy world character stat sheet. Similar to, but not following the rules of Dungeons and Dragons or other role playing games. This character sheet will be output on the webpage that includes a name, a character class, a short biography, and some basic and compound stats.

The output will start with a name followed by a short bio then the stats for the generated character.

Eventually this page may add an enemy generator script and allow for combat.

### Generated Character Sheet:
  * Name
  * Alignment
  * Class
  * Biography
  * Luck (affects all other rolls)
  * Strength
  * Vitality (for health)
  * Dexterity
  * Agility (for stamina or sneaking)
  * Arcana
  * Focus (for mana or spellcasting)
  * Charisma

  #### Vitality, Agility, and Focus
Vitality, Agility, and Focus are "sub stats" that are determined based on the value of their parent stat. Vitality can also be thought of as health, Agility as stamina, and Focus as mana.

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

  Multi Stat:
  * Swashbuckler: STR + DEX
  * Spellsword: STR + INT
  * Warrior-Poet: STR + CHA
  * Assassin: DEX + INT
  * Daredevil: DEX + CHA
  * Mesmer: INT + CHA
  * Hero: STR + DEX + INT + CHA

  ## Known Issues

None at the moment. If you find any please shoot me an email at jesse@jesseheald.com. Include a screenshot or any other data you think may help. Thank you.