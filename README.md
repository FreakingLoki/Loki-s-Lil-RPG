# Loki's Lil RPG

The initial purpose of this project was to design a simple JavaScript program that would randomly generate a messege containing three parts and display that to the user. I decided to start by building a randomized name, a randomly selected biography, and some randomly generated stats (like strength and arcana) for a character that would fit into a fantasy world. I quickly decided I wanted to try and generate a fantasy enemy too. Then I figured since I have an enemy and a main character, I might as well try to allow the end user to engage in combat. So I built a turn-based combat system. This small project quickly turned into my first simple game.

## To Do List: 
* Rework enemies
  * increase chance to encounter difficult enemies
  
  * Rework Input section
    * add a tooltip box when an action button is hovered
    * adjust positioning of action buttons
    
  * add complexity to combat
    * add player and enemy abilities (up to three for each class, not all need to be unique)

  * Add longevity to gameplay
    * allow player to increase stats using win tokens
      * this has to happen AFTER the Begin button is pressed...
      * it will show 8 increase buttons that allow the player to allocate token onclick in the stats area
      * the function call should decrease winToken count, update player object, then updateDOM, then check to see if there are any winTokens remaining, if none, hide all the increase buttons
    * begin combat again


## Generated Player Character
  The generated player character is referred to in game as a Spellbound Arena Combatant or SAC. They can have one of 24 possible classes. Their name is not linked to their class in any way, but the biography should generally make sense for the class. Luck has an effect on the other stats and a small effect on basic attack damge. Currently the maximum possible level for any of the base stats (strength, dexterity, arcana, and charisma) is double the maximum possible level for luck. Luck currently maxes out at 20 and the base stats max out at 40. The vitals (vitality, armor, agility, and focus) have a bottom value and then are added to based on their parent stat. Armor's parent stat is luck to add some fairness to classes that are not high in strength. My first instinct was to have strength be the parent stat for armor, but then classes like warlock or thief may have much more difficulty in combat. Think of armor not jsut as physical armor, but more of as defensive stance, the character's ability to dodge or deflect incoming damage.

  ### SAC Character Sheet
  * Name
  * Alignment
  * Class
  * Biography
  * Luck
  * Strength
  * Vitality (parent stat: strength)
  * Armor (parent stat: luck)
  * Dexterity
  * Agility (parent stat: dexterity)
  * Arcana
  * Focus (parent stat: arcana)
  * Charisma

  ### Possible SAC Classes (sorted by highest main stat)
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

## Generated Enemy Character
Currently there are five possible enemy types in the game. They have their stats generated seperately from the player's stats and are assigned a class based on those stats in the same manner as the player. The main difference is there is a difficulty modifier based on the enemy type. Since every enemy can have any class, their types are more of a species sort of thing. This allows Undead Warlocks and Gerblin Bards to make sense. I'll try to come up with more enemy types in the future and I may flatten the difficulty curve too. Oh, also you are more likely to encounter easier enemies right now. I've been testing a lot and have generated hundreds of enemies and have yet to encounter a Dragon. I may need to adjust the generation curve too.

### Enemy Character Sheet
  * Name
  * Type
  * Luck
  * Strength
  * Vitality (parent stat: strength)
  * Armor (parent stat: luck)
  * Dexterity
  * Agility (parent stat: dexterity)
  * Arcana
  * Focus (parent stat: arcana)
  * Charisma

  ### Possible Enemy Types (sorted from high difficulty to low)
    * Gerblin
    * Troll
    * Undead
    * Fey
    * Dragon


  ## Known Issues

  * after combat the game gets stuck in a "win loop" or a "loss loop" and does not start the game again
  * log messages may show the armor values being increased over their maximum possible values

 If you find any other problems, please shoot me an email at jesse@jesseheald.com. Include a screenshot or any other information you think may help. Thank you.