// define random number generator function
const getRandomInt = multiplier => {
    const randomInt = Math.floor(Math.random() * multiplier);
    return randomInt;
}

// define randomized number generator based on a parent stat and a luck stat
const getComplexInt = (base, luck, multiplier, parentStat) => {
    const complexInt = (base + Math.floor(((multiplier * parentStat) + luck)));
    return complexInt;
}

// define function for determining value of a stat based only on luck
const getStat = (luck, multiplier) => {
    const stat = getRandomInt(multiplier) + luck
    return stat;
}

// these constants target sections of the HTML for DOM manipulation
//main title
const pageTitle = document.getElementById('title');
//log section
const logBox = document.getElementById('log-box');
//begin button
const beginButton = document.getElementById('begin-button');
//stat increase buttons
const statUp = document.getElementsByClassName('stat-up');
//player combat actions panel (initially hidden)
const playerCombat = document.querySelector('#interface-section #player-actions-panel');

// define the win token object for use after victories
let winToken = {
    name: 'Combat Victory Token',
    tokenCount: 0
};

//this function allows logging messages to the user in the log section
const log = (message) => {
    //creates new element for log message
    const logMessage = document.createElement("p");
    logMessage.textContent = `${message}`;

    //adds the message to the log
    logBox.appendChild(logMessage);

    //scroll the log box to the bottom (most recent) entry
    logBox.scrollTop = logBox.scrollHeight;

}

// define name generator function
const genName = () => {
    // array of possible first names
    const firstNames = [
        'Daryndel', 'Azura', 'Deliadorn', 'Hrothgar', 'Faelivrin', 'Lorien', 
        'Tathariel', 'Eilinel', 'Galathil', 'Arweniel', 'Eadwynn', 'Nessa', 'Rhudaur', 
        'Thrainor', 'Melwasul', 'Elara', 'Thorne', 'Kael', 'Niamh', 'Aelric', 
        'Seraphina', 'Evangeline', 'Orion', 'Isolde', 'Lorcan', 'Calla', 'Lysandra', 
        'Dante', 'Ariadne', 'Galen', 'Mei-Lai', 'Jesse', 'Freaking', 'Loki', 'Partyboy', 
        'Anti', 'Belle', 'Jasmine', 'Ron', 'John', 'Griffin', 'Travis', 'Justin', 'Sydnee', 
        'Rachel', 'Teresa', 'Firstname', 'Barbariana', 'Ziggy', 'Fanny', 'Bubbles', 'Cheesecake', 
        'Fluffy', 'Giggles', 'Honeybun', 'Pumpkin', 'Snuggles', 'Tiny', 'Lil', 'Gentle', 'Bear', 'Dragon'
    ];

    // array of possible last names
    const lastNames = [
        'Fireheart', 'Starweaver', 'Snowfoot', 'Ironfist', 'Moonblade', 'Blue', 'the Cowardly', 
        'of the Wood', 'Stormchaser', 'Moonlit', 'Forestwhisper', 'Shadowblade', 'Justgotme', 
        'Oceanheart', 'Wildwood', 'Watersinger', 'Wanderer', 'Thundercaller', 'Ridewinder', 
        'Shadowhunter', 'Stormcaller', 'Nightingale', 'Bloodhound', 'Silverclaw', 'Goodblade', 'Goodwand', 
        'Frostheart', 'Wildwood', 'Thunderstrike', 'Blackthorn', 'Moonblade', 'Flatfoot', 'Goodaxe', 'Goodshot', 
        'Starweaver', 'Ironfist', 'Fireheart', 'Riverstone', 'Windrider', 'of the Hills', 'Goodguy',
        'of the Stars', 'of the Moon', 'of the Lambs', 'of the Elms', 'McCool Guy', 'Goodparty', 'Badparty',  
        'Goodparty', 'Patience', 'Johnson', 'Smith', 'Ronson', 'Paulson', 'Lastname', 'Wreckit', 
        'McSlammaJamma', 'Baddabing', 'Bloop', 'Sizzlefist', 'Nogginwhack', 'Thundertush', 'Gigglefang', 
        'Zapzap', 'Razzlefluff', 'Cheddarbiscuit', 'Punchpenny', 'Snickerdoodle', 'Cracklepop', 'Pizzazzle'
    ];

    // randomize numbers to get ready to select name
    const numOne = getRandomInt(firstNames.length);
    const numTwo = getRandomInt(lastNames.length);

    // concat the results into a single string and return the name
    const charName = firstNames[numOne] + ' ' + lastNames[numTwo];
    return charName;

};

// define randomized alignment function
getAlignment =() => {
    // array of possible lawfulness or order
    const order = ['Lawful', 'Neutral', 'Chaotic'];

    // array of possible moralities
    const morals = ['Good', 'Neutral', 'Evil'];

    //get randomized index for each array
    const orderRoll = getRandomInt(order.length);
    const moralRoll = getRandomInt(morals.length);

    //declare alignment variable
    let randomAlignment = '';

    // avoid returning 'Neutral Neutral' by reassigning that result to 'True Neutral'
    // return all other results normally
    if (orderRoll === moralRoll) {
        randomAlignment = 'True Neutral';
    } else {
        randomAlignment = `${order[orderRoll]} ${morals[moralRoll]}`;
    };

    //output alignment
    return randomAlignment;

};

//define biography generator function
const genBio = (characterClass) => {
    // arrays of strength character bios
    const barbarianBios = [
        "A fierce warrior who draws strength from their emotions, capable of unmatched rage on the battlefield.",
        "A battle-hardened veteran who revels in the chaos of melee combat, driven by their intense passion for fighting.",
        "A wild and unpredictable berserker who fights with a frenzy, disregarding their own safety in their relentless pursuit of victory.",
        "A nomadic warrior who has honed their skills through years of wandering and fighting, driven by a thirst for adventure and battle.",
        "A tribal champion who embodies the power and savagery of their people, wielding massive weapons to crush their enemies."
    ];
    const warriorBios = [
        "A battle-hardened veteran, skilled in a variety of weapons and tactics. They have seen countless conflicts and emerged victorious time and time again. They now lead their comrades into battle, always at the front lines.",
        "A lone mercenary, traveling from place to place in search of their next job. Their reputation precedes them, and many fear their prowess in combat. They keep their emotions buried deep, letting their blade do the talking.",
        "A former slave who rose up against their oppressors and now fights for the freedom of all. They possess a raw power and an unbreakable spirit that inspires others to join their cause.",
        "A young warrior from a small village, seeking to make a name for themselves and prove their worth as a warrior. They are eager for battle and eager to learn, always seeking to improve their skills.",
        "An honorable warrior, bound by a sacred oath to protect and serve their people. They are respected and revered for their unwavering dedication to their duty, and their bravery in the face of danger."
    ];
    const paladinBios = [
        "A former soldier who answered a divine calling, this paladin now travels the land dispensing justice and smiting evil wherever it may be found. They wield a holy symbol as well as a weapon, using both to defend the innocent and strike down the wicked.",
        "Raised in a devout community, this paladin was trained from a young age in the ways of their faith. Now, they are a fearless warrior for their deity, using their strength and courage to protect the weak and bring light to the darkness.",
        "This paladin's family was struck by tragedy, leading them to swear an oath to a deity for vengeance against those who would harm the innocent. They are now a relentless hunter of evil, using their divine magic and combat prowess to right wrongs and bring justice.",
        "After experiencing a powerful vision, this paladin devoted their life to their deity, dedicating themselves to their divine cause. Armed with a holy weapon and the power of their faith, they are a beacon of hope in a world filled with suffering and darkness.",
        "Having lived a life of hardship and survival, this paladin was given a divine purpose by their deity. They now serve as a protector and defender of the innocent, wielding their holy might against all who would do harm."
    ];
    const  warlordBios = [
        "A veteran of many battles, this Warlord's charisma and tactical prowess have earned them a reputation as a leader of armies. Their charisma and fighting spirit inspire their allies to new heights of power and endurance.",
        "A proud and honorable warrior, this Warlord leads by example, charging fearlessly into the fray and rallying their troops with fierce determination. Their tactical mind and unwavering resolve make them a force to be reckoned with on the battlefield.",
        "This Warlord is a natural born leader, with a talent for bringing out the best in those around them. Whether through sheer force of personality or a mastery of strategy, this Warlord knows how to turn the tide of battle and secure victory for their allies.",
        "With a voice that can shake the heavens, this Warlord is a charismatic leader who rallies their troops with powerful speeches and powerful battle cries. Their martial prowess and leadership skills make them a fearsome presence on the battlefield.",
        "A veteran of countless battles, this Warlord's skill with a blade and mastery of tactics have earned them a fearsome reputation. Their indomitable spirit and unbreakable will inspire their allies to greatness, making them a force to be reckoned with on the battlefield."
    ];
    const fighterBios = [
        "A seasoned veteran of countless battles, this fighter is a master of close combat and strategic warfare. With a keen eye for weaknesses and a steely determination, they never back down from a fight.",
        "A former member of a mercenary company, this fighter is well-versed in the ways of war and is feared by friend and foe alike for their deadly precision and cunning. With a large array of weapons and armor at their disposal, they are always ready for battle.",
        "Born and raised on the battlefield, this fighter knows no other life than the clash of steel and the roar of war. With a fiery passion for combat and a never-say-die attitude, they are always ready to take on any challenge that comes their way.",
        "Once a bodyguard for a wealthy noble, this fighter has since struck out on their own, honing their skills in combat and putting them to use as a hired sword. With a reputation for being a master of protection and a formidable opponent in battle, they are in high demand.",
        "A former soldier, this fighter has dedicated their life to the pursuit of martial perfection. With a steadfast discipline and a deep understanding of military tactics, they are a force to be reckoned with on the battlefield."      
    ];

    // arrays of dexterity character bios
    const archerBios = [
        "A master of the bow, this warrior has honed their skills through years of practice and training. Their arrows fly true, striking their targets with deadly precision.",
        "This veteran of countless battles has seen it all. With a bow in hand and a quiver at their side, they are a force to be reckoned with on the battlefield.",
        "A natural born hunter, this archer uses their skills to protect the innocent and defend their land. Their aim is true and their arrows fly straight, striking fear into the hearts of their enemies.",
        "With a bow in hand and the wind at their back, this archer feels most at home in the great outdoors. They are a master of ranged combat, striking down their foes from a safe distance.",
        "A proud member of a long line of archers, this warrior continues the family tradition with skill and grace. Their arrows fly like lightning, striking down their enemies with ease."
    ];
    const rangerBios = [
        "A wandering tracker and hunter, this ranger has honed their skills in the wilds and learned to survive in even the harshest environments. They live for the thrill of the chase and the satisfaction of a job well done.",
        "With a deep connection to the natural world, this ranger uses their powers to protect the innocent and preserve the balance of nature. They are experts in woodcraft and stealth, and their mastery of the bow is unmatched.",
        "A veteran of many battles and skirmishes, this ranger has seen the horrors of war and learned to fight with a deadly precision. They lead their allies from the front lines, inspiring bravery and striking fear into the hearts of their enemies.",
        "Born and raised in the wilds, this ranger is a skilled survivor and a fearsome warrior. They live by their own code and answer to no one, wandering the land in search of adventure and excitement.",
        "As a protector of the wilderness and all its inhabitants, this ranger has sworn an oath to defend their chosen lands from all threats. They are a master of tactics and a seasoned combatant, striking swiftly and silently to defeat their enemies."  
    ];
    const rogueBios = [
        "A nimble thief who has honed their skills in pickpocketing and lockpicking. They use their stealth and cunning to slip in and out of tight situations.",
        "A cunning rogue who specializes in taking down their foes with precise strikes from the shadows. They are experts in the art of deception and misdirection.",
        "A former street urchin who has survived by their wits and quick reflexes. They have a particular talent for infiltrating even the most heavily guarded places.",
        "A daring acrobat who uses their agility and charm to manipulate their way out of any situation. They are known for their fearless nature and their ability to improvise in a pinch.",
        "A mysterious figure who uses their wit and charm to bend others to their will. They are experts at gathering information and using it to their advantage in any situation."
    ];
    const thiefBios = [
        "A nimble and stealthy individual, always on the lookout for their next big score. They have a talent for slipping into tight spaces and a cunning mind for cracking locks and disabling traps. They rely on their wits and speed to survive, and are never afraid to take a risk when the reward is high.",
        "A veteran of the shadows, this thief has seen it all and survived. They have a network of contacts in the underworld and a reputation for getting the job done, no matter the danger. They are quick with a blade and even quicker with a smile, always ready to talk their way out of trouble.",
        "A cunning con artist, this thief is equally skilled at slipping into character and conning their way into wealthy estates. They have a talent for disguise and a silver tongue, able to talk their way into and out of any situation. They live for the thrill of the con and the challenge of fooling their marks.",
        "A former soldier turned mercenary, this thief uses their combat training to their advantage. They are proficient in hand-to-hand combat and are not afraid to take on multiple opponents at once. They take on high-risk jobs for high-reward payouts and have a reputation for never failing a mission.",
        "An acrobat and performer, this thief uses their athletic abilities to maneuver through tight spaces and avoid danger. They have a quick wit and a talent for distraction, using their charm to distract guards and slip by unnoticed. They use their skills to entertain crowds and gather information, always looking for their next big score."  
    ];

    //arrays of arcana character bios
    const wizardBios = [
        "A reclusive scholar, spending most of their time in research and spellcasting. They are a master of the arcane and a force to be reckoned with on the battlefield.",
        "A former court wizard, driven from their position by political upheaval. They now use their magic to earn a living as a mercenary, offering their services to the highest bidder.",
        "A born prodigy, their exceptional talent for magic earned them a place in a prestigious academy at a young age. They now seek to prove themselves as the greatest wizard of their generation.",
        "A traveling performer, using illusions and parlor tricks to entertain crowds. However, behind the showmanship lies a powerful wizard capable of harnessing the elements themselves.",
        "A survivor of a fallen magical society, they are one of the few remaining practitioners of their once-great culture's magic. They now roam the land searching for other remnants of their lost civilization."  
    ];
    const warlockBios = [
        "A warlock who made a pact with a powerful entity in exchange for their arcane abilities. They wield dark magic with ease and strike fear into the hearts of their enemies.",
        "A former member of a secret society, this warlock has spent years studying the ancient tomes of forbidden knowledge. They use their powers to uncover the truth and expose the hidden agendas of those in power.",
        "This warlock channels the power of their patron to cast spells and summon otherworldly creatures to do their bidding. They are a force to be reckoned with in battle and a valuable asset to any adventuring party.",
        "A warlock who seeks to use their powers for good, they have dedicated their life to protecting the innocent and defeating the forces of evil. Their spells and abilities are fueled by their unwavering determination and faith in a higher power.",
        "A mysterious and unpredictable warlock, this individual is known for making deals with dangerous entities and using their powers for their own personal gain. Their motivations are always unclear, but their strength and mastery of the arcane are undeniable."
    ];
    const druidBios = [
        "A solitary figure, often seen communing with nature. They wield powerful magic derived from the natural world, using it to defend the balance of nature and maintain the cycle of life. With their shapeshifting abilities, they are capable of adapting to any situation, making them formidable foes.",
        "This protector of the wilds is a master of the elements, able to call upon the fury of the storm, the power of the earth, or the grace of the sun to defeat their enemies. They are in tune with the animals of the forest and the plants of the field, using their powers to keep the wilderness safe from those who would do it harm.",
        "A wielder of primal magic, this druid is able to call forth powerful spirits from the land and sky to do their bidding. With their deep connection to the earth, they are able to tap into its primal energy, healing wounds, purifying toxins, and restoring balance to the land.",
        "As a defender of the wild, this druid uses their powers to maintain the balance of nature. They are able to call forth the power of the moon and the stars, calling forth the creatures of the night to fight at their side. With their mastery of the elements, they are able to bring down the fiercest storms to smite their foes.",
        "This druid is a master of disguise, using their shapeshifting abilities to blend in with their surroundings and avoid detection. They are often seen lurking in the shadows, using their stealth and cunning to outwit their enemies. With their deep connection to the natural world, they are able to call forth its power to defend themselves and their allies."  
    ];
    const illusionistBios =[
        "A master of deceit, this illusionist has honed their skills to the point of near perfection. Their illusions are so convincing that even the most experienced adventurers can be taken in by their magic.",
        "This illusionist is a natural performer, using their abilities to put on stunning shows for crowds of all sizes. Their magic is as much about entertainment as it is about deception.",
        "An elusive figure, this illusionist is just as comfortable moving unseen through the shadows as they are weaving their magic in plain sight. Their illusions serve as tools for escape and misdirection.",
        "A student of the arcane, this illusionist has spent years studying the ancient texts and practicing the arts of deception and illusion. They are a master of misdirection and can make their enemies see exactly what they want them to.",
        "A trickster at heart, this illusionist uses their powers to play pranks on their companions and bewilder their enemies. Despite their lighthearted nature, they are a formidable opponent when they need to be."
    ];
    const sorcererBios =[
        "Born with a natural affinity for magic, this sorcerer harnesses powerful spells to devastating effect. Their unique understanding of the arcane grants them access to abilities beyond the reach of other spellcasters.",
        "This sorcerer has honed their abilities through countless hours of practice, becoming a master of manipulating magical energy. They can call forth bolts of lightning, summon forth searing flames, and unleash torrents of arcane power.",
        "Hailing from a long line of spellcasters, this sorcerer is well-versed in the art of magic. Their mastery of the arcane has made them a formidable force, capable of decimating entire armies with a flick of their wrist.",
        "An enigma, even to their closest friends, this sorcerer is known for their mastery of illusionary magic. Their powers can be used to create dazzling displays of light and sound, or to deceive their enemies and turn the tide of battle.",
        "With a deep understanding of the arcane and a thirst for knowledge, this sorcerer is always seeking out new ways to push the limits of their abilities. Whether it be through meditation, research, or experimentation, they are never content to rest on their laurels."
    ];

    //arrays of charisma character bios
    const partyAnimalBios = [
        "A life-long lover of revelry, this Party Animal knows how to get a crowd going. Their boisterous personality and impressive drinking skills are just a few of their many talents.",
        "This Party Animal is the life of the party. They have an uncanny ability to liven up any gathering, be it with jokes, song, or simply by being their irrepressible self.",
        "With a voice that can carry across any tavern and a personality that shines just as brightly, this Party Animal is the go-to for a good time. Their signature move is getting everyone to join in a chorus of their favorite drinking song.",
        "This Party Animal is a connoisseur of all things merry. From the finest meads and ales, to the best games of chance, they always know how to keep the party going. And if the fun ever begins to wane, they're always ready with a new trick up their sleeve.",
        "An energetic ball of fire, this Party Animal is always the first to start a dance or sing a song. They have a seemingly endless supply of good cheer, and their infectious spirit is sure to bring a smile to even the grimmest of faces."
    ];
    const clericBios = [
        "A devoted servant of the divine, this cleric is known for their unwavering faith and healing powers. They often travel with adventurers, offering their aid to those in need and spreading their deity's teachings.",
        "This veteran cleric has seen the horrors of war and the desperation of the sick and injured. They have dedicated their life to the divine, using their powers to bring comfort and hope to those in need.",
        "Trained by their temple from a young age, this cleric's mastery of divine magic is unparalleled. They are respected by their allies and feared by their enemies, who know to steer clear of their wrath.",
        "Through rigorous study and devotion, this cleric has unlocked the secrets of the divine. Their powers are not limited to healing, but also extend to protection, divination, and banishment of evil.",
        "A humble servant of the divine, this cleric is often seen in the company of traveling merchants, offering blessings to ensure safe travels and success in business. Despite their gentle demeanor, they are a force to be reckoned with in battle."
    ];
    const bardBios = [
        "A master of song and storytelling, this bard uses their talents to inspire and enrapture those around them. Whether performing for royalty or leading a charge into battle, their charisma and quick wit are unmatched.",
        "This bard is a wanderer at heart, traveling from town to town and sharing their musical gifts with anyone who will listen. Their wit is as sharp as their blade, and they are never afraid to use either to get themselves out of a tight spot.",
        "A bard of the theatre, this performer uses their skills to bring epic tales to life on stage. Their passion for drama and talent for improvising have earned them a reputation as one of the greatest bards in the land.",
        "A bard of the court, this musician uses their songs to sway the hearts and minds of those in power. They are as cunning as they are charming, and they are never afraid to use their wit and musical talents to get what they want.",
        "This bard is a chronicler of history, using their music to preserve the tales and traditions of their people. Their songs are a testament to their culture, and they travel far and wide to collect new stories and melodies to add to their repertoire."   
    ];

    // multi stat bios
    const swashbucklerBios = [
        "Born into a life of adventure and excitement, this Swashbuckler has always lived on the edge. With quick wit and even quicker reflexes, they have become a master of fencing and the art of the blade. Whether they're dueling with rival pirates or plundering treasure from enemy ships, they always manage to come out on top.",
        "A former street urchin, this Swashbuckler learned how to survive by their wits and cunning. They honed their skills as a pickpocket and thief, eventually becoming a notorious rogue known throughout the land. They use their charm and grace to outwit their opponents, making them a formidable opponent in both combat and negotiation.",
        "Having grown up in a family of traveling performers, this Swashbuckler learned to dance, sing, and fence at a young age. They've since combined these skills to become the life of any party and a daring adventurer. They're just as likely to take on a challenge for the thrill of it as they are for the reward, making them a true wild card.",
        "After a life of hard work on their family's farm, this Swashbuckler was ready for a change of pace. They joined a group of sailors and quickly rose through the ranks, eventually becoming the ship's first mate. Their cunning and bravery in battle earned them the respect of their crew, and they now lead daring raids and adventures on the high seas.",
        "As a former member of the city guard, this Swashbuckler has seen their fair share of action. They were forced to retire after a run-in with corrupt officials, but they've since found a new calling as a mercenary and adventurer. They use their combat skills and strategic mind to take on the toughest of challenges, always coming out on top."
      ];
      const spellswordBios = [
        "A former soldier, this Spellsword has honed their skills in both combat and magic. They are a formidable opponent on the battlefield, wielding their sword and spells with equal mastery.",
        "This Spellsword has lived a life of adventure, seeking out powerful magical artifacts and battling dangerous creatures. They are always ready for their next challenge, their sword and spellbook always at their side.",
        "This Spellsword is a respected member of their local mage's guild, known for their unique blend of martial prowess and magical abilities. They often use their powers to protect their community and keep the peace.",
        "A wanderer and mercenary, this Spellsword will take any job that pays well and presents a good challenge. They are equally skilled in swordplay and spellcasting, always finding a way to use both to their advantage.",
        "This Spellsword is a student of both magic and swordplay, seeking to master both disciplines. They spend their days training and studying, hoping to one day become a legend among Spellswords."
      ];
      const warriorPoetBios = [
        "A bard with a battle axe, they combine their artistic talent with brute strength to create a truly unique experience in combat. Often seen reciting epic verse while they swing their weapon.",
        "A lyrical genius who uses their words to inspire allies and strike fear into foes. They wield their sword as deftly as they wield a quill.",
        "A true romantic, they believe that chivalry and combat go hand in hand. With their silver tongue and sharp steel, they always come out on top.",
        "A wordsmith who uses their charisma and wit to confuse and disarm opponents. Their weapons are their rhymes, and they always hit their mark.",
        "An artist of war, they see every battle as a performance. With their poetic prowess and impressive prowess, they captivate audiences on and off the battlefield."
        ];
      const assassinBios = [
        "An elusive figure who always seems to be one step ahead of their target. Skilled in the arts of subterfuge and assassination.",
        "A master of disguise who can blend into any crowd and strike from the shadows. Their blade is always sharp and their aim true.",
        "A hired killer who never fails to complete their contract. Their cold, calculating nature makes them feared by friend and foe alike.",
        "A silent predator who can slip into any stronghold undetected. Their expertise in the arts of poisoning and trap-making is unmatched.",
        "A mysterious individual who takes pride in their work. Their clients may never know their face, but they will never forget their name."
      ];
      const daredevilBios = [
        "Skills with a blade are only the beginning of this daring rogue's talents. Parkour and acrobatics are just as essential to their daring escapes.",
        "This daredevil is never one to back down from a challenge, be it a high-stakes heist or a death-defying stunt. They live for the thrill of the unknown.",
        "Their quick thinking and even quicker reflexes make this daredevil a formidable opponent in any situation. They thrive on the rush of adrenaline.",
        "From freeing political prisoners to stealing from the rich, this daredevil uses their skills for both personal gain and the greater good. They're always looking for their next adventure.",
        "This daredevil has a reputation for being one of the most fearless and unpredictable adventurers in the land. They never hesitate to take on a dangerous mission, even if the odds are against them."
      ];
      const mesmerBios = [
        "A master of illusion and persuasion, this Mesmer weaves spells to bend the minds of their enemies.",
        "An enigma wrapped in mystery, this Mesmer leaves onlookers guessing as to what is real and what is just an illusion.",
        "With a flick of their wrist and a wave of their hand, this Mesmer commands attention and dominates the battlefield with their enchanting abilities.",
        "A charismatic performer, this Mesmer draws crowds with their mesmerizing shows and leaves their audience in awe.",
        "Through their mastery of the arcane, this Mesmer creates illusions that confound and confuse their enemies, leaving them vulnerable to attack."
      ];
     const heroBios = [
        "They say heroes never die, but this one has died at least three times and still keeps coming back. Must be that plot armor.",
        "They always seem to have the right thing to say in any situation, probably because they've memorized every good alignment speech in the book.",
        "Their bravery is only matched by their inability to understand basic math. 'One plus one equals sword!'",
        "Their shining armor is always blindingly bright, but that's probably because it's never actually been cleaned.",
        "They have a habit of leaving a trail of unconscious bodies behind them, but somehow still manage to convince people they're the good guys."
        ];

    //based on characterClass, choose a bio array
    let classBio = [];
    switch (characterClass) {
        case 'Barbarian':
            classBio = barbarianBios;
            break;
        case 'Warrior':
            classBio = warriorBios;
            break;
        case 'Paladin':
            classBio = paladinBios;
            break;
        case 'Warlord':
            classBio = warlordBios;
            break;
        case 'Fighter':
            classBio = fighterBios;
            break;
        case 'Archer':
            classBio = archerBios;
            break;
        case 'Ranger':
            classBio = rangerBios;
            break;
        case 'Rogue':
            classBio = rogueBios;
            break;
        case 'Thief':
            classBio = thiefBios;
            break;
        case 'Wizard':
            classBio = wizardBios;
            break;
        case 'Warlock':
            classBio = warlockBios;
            break;
        case 'Druid':
            classBio = druidBios;
            break;
        case 'Illusionist':
            classBio = illusionistBios;
            break;
        case 'Sorcerer':
            classBio = sorcererBios;
            break;
        case 'Party Animal':
            classBio = partyAnimalBios;
            break;
        case 'Cleric':
            classBio = clericBios;
            break;
        case 'Bard':
            classBio = bardBios;
            break;
        case 'Swashbuckler':
            classBio = swashbucklerBios;
            break;
        case 'Spellsword':
            classBio = spellswordBios;
            break;
        case 'Warrior-Poet':
            classBio = warriorPoetBios;
            break;
        case 'Assassin':
            classBio = assassinBios;
            break;
        case 'Daredevil':
            classBio = daredevilBios;
            break;
        case 'Mesmer':
            classBio = mesmerBios;
            break;
        case 'Hero':
            classBio = heroBios;
            break;
    }
    // get a random index to use with the array of biographies
    const num = getRandomInt(classBio.length);

    // choose a random biography based on the random index
    const randomClassBio = classBio[num];

    //return the randomized biography
    return randomClassBio;
      
};

// define class selection function
const getClass = (STR, DEX, ARC, CHA, LCK, maxLuck) => {

    let determinedClass = ''

    // strength based classes
    if (STR > DEX && STR > ARC) {
        if (DEX > CHA && ARC > CHA) {
            determinedClass = 'Barbarian';
        } else if (DEX > ARC && DEX > CHA) {
            determinedClass = 'Warrior';
        } else if (ARC > DEX && ARC > CHA) {
            determinedClass = 'Paladin';
        } else if (CHA > ARC && CHA > DEX) {
            determinedClass ='Warlord';
        } else {
            determinedClass = 'Fighter';
        }
    }
    // dexterity based classes
    else if (DEX > STR && DEX > ARC) {
        if (STR > ARC && STR > CHA) {
            determinedClass = 'Archer';
        } else if (CHA < ARC && CHA < STR) {
            determinedClass = 'Ranger';
        } else if (CHA > ARC && CHA > STR) {
            determinedClass = 'Rogue';
        } else {
            determinedClass = 'Thief';
        }
    // arcana based classes
    } else if (ARC > STR && ARC > DEX) {
        if (STR < DEX && STR < CHA) {
            determinedClass = 'Wizard';
        } else if (STR > DEX && STR > CHA) {
            determinedClass = 'Warlock';
        } else if (DEX < STR && DEX < CHA) {
            determinedClass = 'Druid';
        } else if (DEX > STR && DEX > CHA) {
            determinedClass = 'Illusionist';
        } else {
            determinedClass = 'Sorcerer';
        }
    // charisma based classes
    } else if (CHA > STR && CHA > ARC) {
        if (LCK >= maxLuck) {
            determinedClass = 'Party Animal';
        } else if (ARC > STR && ARC > DEX) {
            determinedClass ='Cleric';
        } else {
            determinedClass = 'Bard';
        }
    // multistat based classes
    } else {
        if ( STR === DEX && STR === ARC && STR === CHA) {
            determinedClass = 'Hero';
        } else if (STR === DEX) {
            determinedClass = 'Swashbuckler';
        } else if (STR === ARC) {
            determinedClass = 'Spellsword';
        } else if (STR === CHA) {
            determinedClass = 'Warrior-Poet';
        } else if (DEX === ARC) {
            determinedClass = 'Assassin';
        } else if (DEX === CHA) {
            determinedClass = 'Daredevil'
        } else if (ARC === CHA) {
            determinedClass = 'Mesmer'
        } else {
            determinedClass = 'Hero'
        }
    }

    return determinedClass;
};

//functions defining basic damage numbers based on a main stat with bonus damage from luck
//strength based damage
const strDamge = (character) => {
    let damageRoll = getRandomInt(3) + 1;
    let damage = 1;
    damage = Math.floor(damageRoll * (Math.floor(0.25 * (character.strength + character.luck))));
    return damage;
};

//dexterity based damage
const dexDamage = (character) => {
    let damageRoll = getRandomInt(3) +1;
    let damage = 1;
    damage = Math.floor(damageRoll * (Math.floor(0.25 * (character.dexterity + character.luck))));
    return damage
};

//arcana based damage
const arcDamage = (character) => {
    let damageRoll = getRandomInt(3) +1;
    let damage = 1;
    damage = Math.floor(damageRoll * (Math.floor(0.25 * (character.arcana + character.luck))));
    return damage;
};

//charisma based damage 
const chaDamage = (character) => {
    let damageRoll = getRandomInt(3) +1;
    let damage = 1;
    damage = Math.floor(damageRoll * (Math.floor(0.5 * (character.charisma + character.luck))));
    return damage;
};

const generateCharacter = () => {





   

    // statBase is the base value for the player's vitals
    const statBase = 40;
    // statMultiplier defines how much of an effect the parent stat has on the related vital stat
    const statMultiplier = 1.5;
    // statMax is the maximum level for luck which makes the maximum possible level for the other stats double this value
    const statMax = 20;
    
    //call functions to generate character sheet
    //Luck has to be rolled first because it effects every other stat
    const LCK = getRandomInt(statMax);
    // roll for basic stats
    const STR = getStat(LCK, statMax);
    const DEX = getStat(LCK, statMax);
    const ARC = getStat(LCK, statMax);
    const CHA = getStat(LCK, statMax);

    // roll for vitals based on a parent stat
    const VIT = getComplexInt(statBase, LCK, statMultiplier, STR);
    const maxVIT = VIT;
    const ARM = getComplexInt(statBase, LCK, statMultiplier, LCK);
    const maxARM = ARM;
    const AGI = getComplexInt(statBase, LCK, statMultiplier, DEX);
    const maxAGI = AGI;
    const FOC = getComplexInt(statBase, LCK, statMultiplier, ARC);
    const maxFOC = FOC;

    //determine the character's class
    const charClass = getClass(STR, DEX, ARC, CHA, LCK, statMax);

    // generate a randomized name
    const charName = genName();

    // generate a randomized moral alignment
    const charAlign = getAlignment();

    // get a randomized biography
    const charBio = genBio(charClass);



    const player = {
        //player name and flavor
        name: charName,
        className: charClass,
        alignment: charAlign,

        //player bio
        bio: charBio,

        //player stats
        luck: LCK,
        strength: STR,
        maxVitality: maxVIT,
        vitality: VIT,
        maxArmor: maxARM,
        armor: ARM,
        dexterity: DEX,
        maxAgility: maxAGI,
        agility: AGI,
        arcana: ARC,
        maxFocus: maxFOC,
        focus: FOC,
        charisma: CHA,

        //basic attack function for the player
        playerAttack: function(enemy) {
            let attackDamage = 1;

            switch (this.className) {

                //strength based classes
                case 'Barbarian':
                    attackDamage = strDamge(this);
                    break;
                case 'Warrior':
                    attackDamage = strDamge(this);
                    break;
                case 'Paladin':
                    attackDamage = strDamge(this);
                    break;
                case 'Warlord':
                    attackDamage = strDamge(this);
                    break;
                case 'Fighter':
                    attackDamage = strDamge(this);
                    break;

                // dexterity based classes
                case 'Archer':
                    attackDamage = dexDamage(this);
                    break;
                case 'Ranger':
                    attackDamage = dexDamage(this);
                    break;
                case 'Rogue':
                    attackDamage = dexDamage(this);
                    break;
                case 'Thief':
                    attackDamage = dexDamage(this);
                    break;

                // arcana based classes
                case 'Wizard':
                    attackDamage = arcDamage(this);
                    break;
                case 'Warlock':
                    attackDamage = arcDamage(this);
                    break;
                case 'Druid':
                    attackDamage = arcDamage(this);
                    break;
                case 'Illusionist':
                    attackDamage = arcDamage(this);
                    break;
                case 'Sorcerer':
                    attackDamage = arcDamage(this);
                    break;

                // charisma based classes
                case 'Party Animal':
                    attackDamage = chaDamage(this);
                    break;
                case 'Cleric':
                    attackDamage = chaDamage(this);
                    break;
                case 'Bard':
                    attackDamage = chaDamage(this);
                    break;

                // multistat classes
                case 'Swashbuckler':
                    attackDamage = Math.floor(0.5 * (strDamge(this) + dexDamage(this)));
                    break;
                case 'Spellsword':
                    attackDamage = Math.floor(0.5 * (strDamge(this) + arcDamage(this)));
                    break;
                case 'Warrior-Poet':
                    attackDamage = Math.floor(0.5 * (strDamge(this) + chaDamage(this)));
                    break;
                case 'Assassin':
                    attackDamage = Math.floor(0.5 * (dexDamage(this) + arcDamage(this)));
                    break;
                case 'Daredevil':
                    attackDamage = Math.floor(0.5 * (dexDamage(this) + chaDamage(this)));
                    break;
                case 'Mesmer':
                    attackDamage = Math.floor(0.5* (arcDamage(this) + chaDamage(this)));
                    break;
                case 'Hero':
                    attackDamage = Math.ceil((0.3 * (strDamge(this) + dexDamage(this) + arcDamage(this) + chaDamage(this))) + (0.25 * this.luck));
                    break;
                default:
                    attackDamage = strDamge(this);
                    break;
            }

            // deal damage to enemy
            if (enemy.armor > 0) {
                if ((enemy.armor - attackDamage) < 0) {
                    enemy.vitality -= (attackDamage - enemy.armor)
                    log(`Your SAC punched through the last of the ${enemy.type}'s armor and hurt them for ${(attackDamage - enemy.armor)} damage!`)
                    enemy.armor = 0;
                } else {
                    enemy.armor -= attackDamage;
                    log(`${this.name} dealt ${attackDamage} to the enemy and reduced their armor to ${enemy.armor}!`)
                }
            } else {
                enemy.vitality -= attackDamage;
                log(`Your ${this.className} attacked the enemy and dealt ${attackDamage} damage to them!`)
            }

        },

        // player defense function
        playerDefend: function() {
            let diceRoll = getRandomInt(20);
            const critDefend = Math.floor((this.agility * 0.75) + 4);
            const highDefend = Math.floor((this.agility * 0.5) + 3);
            const lowDefend =  Math.floor((this.agility * 0.25) + 2);
            const badDefend = Math.floor((this.agility * 0.1) + 1);

            if (this.agility > 0) {
                if (diceRoll === 19) {
                    this.armor += critDefend;
                    log(`Critical success! Your SAC artfully recovered their defensive stance. Armor increased by ${critDefend} to ${this.armor}.`);
                } else if (diceRoll >= 14) {
                    this.armor += highDefend;
                    log(`Success! Your SAC recovered their footing and braced for attack. Armor increased by ${highDefend} to ${this.armor}.`);
                } else if (diceRoll >= 9) {
                    this.armor += lowDefend;
                    log(`Barely managed it! Your ${this.className} clumisly kept balance. Armor increased by ${lowDefend} to ${this.armor}.`);
                } else if (diceRoll >= 4) {
                    this.armor += badDefend;
                    log(`It is bewildering that ${this.name} is still on their feet. Armor increased by ${badDefend} to ${this.armor}.`);
                } else {
                    if (this.armor - 1 === 0) {
                        this.armor = 0;
                        log(`Your SAC fell right on their bum. Armor decreased by 1 to ${this.armor}.`)
                    } else {
                        this.armor -= 1;
                        log(`Your SAC fell right on their bum. Armor decreased by 1 to ${this.armor}.`)
                    }

                };
            
                if (this.armor >= this.maxArmor) {
                    this.armor = this.maxArmor;
                };
            
                this.agility -= 2;

            } else {
                this.armor -= 1;
                log(`Your SAC's defensive stance is... Well it's not one. Their agility is exhausted. While trying to catch their breath the ${this.name} tripped and fell right on their bum. Armor decreased by 1 to ${this.armor}.`)
            }
        }
    }

    return player;

};

// enemy name generator function
const getEnemyName = () => {
    //arrays of first and last names for bad dudes
    const enemyFirstNames = [
        'Sneaky', 'Scooter', 'Ziggy', 'Slim', 'Bones', 'Mort', 'Mugsy', 'Vinnie',
        'Fingers', 'Ducky', 'Sparks', 'Scrappy', 'Stretch', 'Toothpick', 'Grouch', 'Waldo',
        'Rascal', 'Ratso', 'Weasel', 'Stinky', 'Snortgargle', 'Paul', 'Billy', 'Bruiser', 
        'Bad', 'John', 'Rat', 'Snake'
    ];
    
    const enemyLastNames = [
        'The Sneak', 'Badparty', 'Q. Evil', 'Smith', 'The Ugly', 'The Rude', 'The Entitled', 'of the Depths',
        'Badtimes', 'Meanface', 'McGee', 'The Quarrelsome', 'of the Swamp', 'of the Mists', 'Underfoot', 'No Fun',
        'The Hood', 'Johnson', 'Big Claw', 'Left Swipe', 'Redeye', 'Fart', 'Slow-walker', 'The Misunderstood', 'the Fist',
        'Punchalot', 'Kickalot', 'Stabalot', 'The Vengeful', 'of the Plague'
    ];
    
    // randomize numbers to get ready to select name
    const numOne = getRandomInt(enemyFirstNames.length);
    const numTwo = getRandomInt(enemyLastNames.length);

    // concat the results into a single string and return the name
    const enemyName = enemyFirstNames[numOne] + ' ' + enemyLastNames[numTwo];
    return enemyName;
}

// enemy type generator function
const getEnemyType = () => {
    //array containing all possible enemy types sorted from low difficulty to high
    const enemyTypes = [
        'Gerblin', 'Troll', 'Undead', 'Fey', 'Dragon'
    ];

    //determine range of possible indicies
    const range = (enemyTypes.length - 1) - 0;
    //this exponent determines the "weight" toward the easy end of the array
    const exponent = 1.1;
    // raise range to the power of exponent
    const weightedRange = Math.pow(range, exponent);
    // generate random number between 0 and weightedRange then root to make the final result more likely to be toward beginning of array
    const random = Math.floor(Math.pow(Math.random() * weightedRange, 1/exponent));
    // calculate the index
    const index = Math.round((random / weightedRange) * range);
    const enemyType = enemyTypes[index];
    return enemyType;
};

const determineDifficulty = enemyType => {
    //declare variable and assign default value
    let difficulty = 0.1;

    // determine difficulty based on enemy type higher index in the array should have higher difficulty
    switch (enemyType) {
        case 'Gerblin':
          difficulty = 0.9;
          break;
        case 'Troll':
          difficulty = 1;
          break;
        case 'Undead':
          difficulty = 1.05;
          break;
        case 'Fey':
            difficulty = 1.1;
            break;
        case 'Dragon':
            difficulty = 1.15;
            break;
        default:
          difficulty = 0.1;
          break;
      }

    return difficulty;
};

const generateEnemy = () => {



    //generate a name first
    const enemyName = getEnemyName();

    //get an enemy type next
    const enemyType = getEnemyType();

    //get difficulty modifier this has to be determined before the stats are rolled
    const difficulty = determineDifficulty(enemyType);

    // statBase is the base value for vitals
    const statBase = 40 * difficulty;
    // statMultiplier defines how much of an effect the parent stat has on the related vital stat
    const statMultiplier = 1.5;
    // statMax is the maximum level for luck which makes the maximum possible level for the other stats double this value
    const statMax = 20 * difficulty;

    //generate stats based on difficulty
    const LCK = getRandomInt(statMax);
    // roll for basic stats
    const STR = getStat(LCK, statMax);
    const DEX = getStat(LCK, statMax);
    const ARC = getStat(LCK, statMax);
    const CHA = getStat(LCK, statMax);

    // roll for vitals based on a parent stat
    const VIT = getComplexInt(statBase, LCK, statMultiplier, STR);
    const maxVIT = VIT;
    const ARM = getComplexInt(statBase, LCK, statMultiplier, LCK);
    const maxARM = ARM;
    const AGI = getComplexInt(statBase, LCK, statMultiplier, DEX);
    const maxAGI = AGI;
    const FOC = getComplexInt(statBase, LCK, statMultiplier, ARC);
    const maxFOC = FOC;

    const enemyClass = getClass(STR, DEX, ARC, CHA, LCK, statMax)

    const enemy = {
        name: enemyName,
        type: enemyType,
        className: enemyClass,

        vitality: VIT,
        maxVitality: maxVIT,
        armor: ARM,
        maxArmor: maxARM,
        agility: AGI,
        maxAgility: maxAGI,
        focus: FOC,
        maxFocus: maxFOC,

        luck: LCK,
        strength: STR,
        dexterity: DEX,
        arcana: ARC,
        charisma: CHA,

        // enemy's basic attack function
        enemyAttack: function(player) {
            let attackDamage = 1;

            switch (this.className) {

                //strength based classes
                case 'Barbarian':
                    attackDamage = strDamge(this);
                    break;
                case 'Warrior':
                    attackDamage = strDamge(this);
                    break;
                case 'Paladin':
                    attackDamage = strDamge(this);
                    break;
                case 'Warlord':
                    attackDamage = strDamge(this);
                    break;
                case 'Fighter':
                    attackDamage = strDamge(this);
                    break;

                // dexterity based classes
                case 'Archer':
                    attackDamage = dexDamage(this);
                    break;
                case 'Ranger':
                    attackDamage = dexDamage(this);
                    break;
                case 'Rogue':
                    attackDamage = dexDamage(this);
                    break;
                case 'Thief':
                    attackDamage = dexDamage(this);
                    break;

                // arcana based classes
                case 'Wizard':
                    attackDamage = arcDamage(this);
                    break;
                case 'Warlock':
                    attackDamage = arcDamage(this);
                    break;
                case 'Druid':
                    attackDamage = arcDamage(this);
                    break;
                case 'Illusionist':
                    attackDamage = arcDamage(this);
                    break;
                case 'Sorcerer':
                    attackDamage = arcDamage(this);
                    break;

                // charisma based classes
                case 'Party Animal':
                    attackDamage = chaDamage(this);
                    break;
                case 'Cleric':
                    attackDamage = chaDamage(this);
                    break;
                case 'Bard':
                    attackDamage = chaDamage(this);
                    break;

                // multistat classes
                case 'Swashbuckler':
                    attackDamage = Math.floor(0.5 * (strDamge(this) + dexDamage(this)));
                    break;
                case 'Spellsword':
                    attackDamage = Math.floor(0.5 * (strDamge(this) + arcDamage(this)));
                    break;
                case 'Warrior-Poet':
                    attackDamage = Math.floor(0.5 * (strDamge(this) + chaDamage(this)));
                    break;
                case 'Assassin':
                    attackDamage = Math.floor(0.5 * (dexDamage(this) + arcDamage(this)));
                    break;
                case 'Daredevil':
                    attackDamage = Math.floor(0.5 * (dexDamage(this) + chaDamage(this)));
                    break;
                case 'Mesmer':
                    attackDamage = Math.floor(0.5* (arcDamage(this) + chaDamage(this)));
                    break;
                case 'Hero':
                    attackDamage = Math.ceil((0.3 * (strDamge(this) + dexDamage(this) + arcDamage(this) + chaDamage(this))) + (0.25 * this.luck));
                    break;
                default:
                    attackDamage = strDamge(this);
                    break;
            }
        
            if (player.armor > 0) {
                if ((player.armor - attackDamage) < 0) {
                    player.vitality -= (attackDamage - player.armor)
                    log(`${this.name}'s attack punched right through ${player.name}'s armor! They took ${(attackDamage - player.armor)} damage.`)
                    player.armor = 0;
                } else {
                    player.armor -= attackDamage;
                    log(`The ${this.type} dealt ${attackDamage} damage to your SAC and reduced their armor to ${player.armor}.`)
                }
            } else {
                player.vitality -= attackDamage;
                log(`${this.name} attacked your SAC and dealt ${attackDamage} damage!`)
            }
        },

        //enemy defend function
        enemyDefend: function() {
            let diceRoll = getRandomInt(20);
            const critDefend = Math.floor((this.agility * 0.75) + 4);
            const highDefend = Math.floor((this.agility * 0.5) + 3);
            const lowDefend =  Math.floor((this.agility * 0.25) + 2);
            const badDefend = Math.floor((this.agility * 0.1) + 1);

            if (this.agility > 0) {
                if (diceRoll === 19) {
                    this.armor += critDefend;
                    log(`Critical success! ${this.name} artfully recovered their defensive stance. Their armor increased by ${critDefend} to ${this.armor}.`);
                } else if (diceRoll >= 14) {
                    this.armor += highDefend;
                    log(`Success! ${this.name} recovered their footing and braced for attack. Their armor increased by ${highDefend} to ${this.armor}.`);
                } else if (diceRoll >= 9) {
                    this.armor += lowDefend;
                    log(`Barely managed it! ${this.name} clumisly kept their balance. Their armor increased by ${lowDefend} to ${this.armor}.`);
                } else if (diceRoll >= 4) {
                    this.armor += badDefend;
                    log(`It makes no sense the ${this.type} is still on their feet Their armor increased by ${badDefend} to ${this.armor}.`);
                } else {
                    if (this.armor - 1 === 0) {
                        this.armor = 0;
                        log(`The ${this.type} fell right on their bum. Armor decreased by 1 to ${this.armor}.`)
                    } else {
                        this.armor -= 1;
                        log(`The ${this.type} fell right on their bum. Armor decreased by 1 to ${this.armor}.`)
                    }
                };
            
                if (this.armor >= this.maxArmor) {
                    this.armor = this.maxArmor;
                };

                if (this.agility - 2 <= 0) {
                    this.agility = 0;
                } else {
                    this.agility -= 2;
                };
            


            } else {
                this.armor -= 1;
                log(`Failed to defend! ${this.name}'s agility is exhausted. While trying to catch their breath they trip and fall right on their bum. Armor decreased by 1 to ${this.armor}.`)
            }
        }

    }

    return enemy;
};

const updateDOM = () => {
    // update player's status
    document.getElementById("player-info").innerHTML = `
    <div id="player-name-card">
        <h3>Name</h3>
        <p>${player.name}</p>
    </div>


    <div id="player-info-container">
        <div class="player-info-card">
            <h4>Alignment</h4>
            <p>${player.alignment}</p>
        </div>

        <div class="player-info-card">
            <h4>Class</h4>
            <p>${player.className}</p>
        </div>
    </div>

    <div id="player-bio-card">
        <h4>Bio</h4>
        <p>${player.bio}</p>
    </div>

    <div id="player-stats">
        <div class="stat-card">
            <h4>Vitality</h4>
            <p>${player.vitality} / ${player.maxVitality}</p>
            <button type="button" id="vit-up" class="stat-up hidden"><p>Add</p></button>
        </div>

        <div class="stat-card">
            <h4>Agility</h4>
            <p>${player.agility} / ${player.maxAgility}</p>
            <button type="button" id="agi-up" class="stat-up hidden"><p>Add</p></button>
        </div>

        <div class="stat-card">
            <h4>Focus</h4>
            <p>${player.focus} / ${player.maxFocus}</p>
            <button type="button" id="foc-up" class="stat-up hidden"><p>Add</p></button>
        </div>
        
        <div class="stat-card">
            <h4>Luck</h4>
            <p>${player.luck}</p>
            <button type="button" id="lck-up" class="stat-up hidden"><p>Add</p></button>
        </div>

        <div class="stat-card">
            <h4>Strength</h4>
            <p>${player.strength}</p>
            <button type="button" id="str-up" class="stat-up hidden"><p>Add</p></button>
        </div>

        <div class="stat-card">
            <h4>Dexterity</h4>
            <p>${player.dexterity}</p>
            <button type="button" id="dex-up" class="stat-up hidden"><p>Add</p></button>
        </div>

        <div class="stat-card">
            <h4>Arcana</h4>
            <p>${player.arcana}</p>
            <button type="button" id="arc-up" class="stat-up hidden"><p>Add</p></button>
        </div>

        <div class="stat-card">
            <h4>Charisma</h4>
            <p>${player.charisma}</p>
            <button type="button" id="cha-up" class="stat-up hidden"><p>Add</p></button>
        </div>
    </div>
    `;

    // show player vitals panel
    document.getElementById("player-vitals").style.display = 'grid';
    // add player stats to vitals area
    document.getElementById("player-vitals").innerHTML = `
    <div id="vitals-player-name">
        <p>${player.name} the ${player.className}</p>
    </div>

    <div id="vitals-player-vit">
        <h4>Vitality</h4>
        <p>${player.vitality}/${player.maxVitality}</p>
    </div>
    <div id="vitals-player-arm">
        <h4>Armor</h4>
        <p>${player.armor}/${player.maxArmor}</p>
    </div>
    <div id="vitals-player-agi">
        <h4>Agility</h4>
        <p>${player.agility}/${player.maxAgility}</p>
    </div>
    <div id="vitals-player-foc">
        <h4>Focus</h4>
        <p>${player.focus}/${player.maxFocus}</p>
    </div>
    `;

    // update enemy status
    document.getElementById("enemy-info").innerHTML = `
    <div id="enemy-name-card">
        <h3>Enemy</h3>
        <p>${enemy.name}</p>
    </div>


    <div id="enemy-info-container">
        <div class="enemy-info-card">
            <h4>Enemy Type</h4>
            <p>${enemy.type}</p>
        </div>
        <div class="enemy-info-card">
            <h4>Enemy Class</h4>
            <p>${enemy.className}</p>
        </div>
    </div>

    <div id="enemy-stats">
        <div class="stat-card">
            <h4>Vitality</h4>
            <p>${enemy.vitality} / ${enemy.maxVitality}</p>
        </div>

        <div class="stat-card">
            <h4>Agility</h4>
            <p>${enemy.agility} / ${enemy.maxAgility}</p>
        </div>

        <div class="stat-card">
            <h4>Focus</h4>
            <p>${enemy.focus} / ${enemy.maxFocus}</p>
        </div>

        <div class="stat-card">
            <h4>Luck</h4>
            <p>${enemy.luck}</p>
        </div>

        <div class="stat-card">
            <h4>Strength</h4>
            <p>${enemy.strength}</p>
        </div>

        <div class="stat-card">
            <h4>Dexterity</h4>
            <p>${enemy.dexterity}</p>
        </div>

        <div class="stat-card">
            <h4>Arcana</h4>
            <p>${enemy.arcana}</p>
        </div>

        <div class="stat-card">
            <h4>Charisma</h4>
            <p>${enemy.charisma}</p>
        </div>
    </div>
    `;

    //show enemy vitals panel
    document.getElementById("enemy-vitals").style.display = 'grid';
    // add enemy stats to vitals area
    document.getElementById("enemy-vitals").innerHTML = `
    <div id="vitals-enemy-name">
        <p>${enemy.name} the ${enemy.type} ${enemy.className}</p>
    </div>
    <div id="vitals-enemy-vit">
        <h4>Vitality</h4>
        <p>${enemy.vitality}/${enemy.maxVitality}</p>
    </div>
    <div id="vitals-enemy-arm">
        <h4>Armor</h4>
        <p>${enemy.armor}/${enemy.maxArmor}</p>
    </div>
    <div id="vitals-enemy-agi">
        <h4>Agility</h4>
        <p>${enemy.agility}/${enemy.maxAgility}</p>
    </div>
    <div id="vitals-enemy-foc">
        <h4>Focus</h4>
        <p>${enemy.focus}/${enemy.maxFocus}</p>
    </div>
    `;
};

const clearDOM = () => {
        // update player's status
        document.getElementById("player-info").innerHTML = `
        <div id="player-name-card">
            <h3>Name</h3>
            <p>Destroyed Spellbound Arena Combatant</p>
        </div>
    
    
        <div id="player-info-container">
            <div class="player-info-card">
                <h4>Alignment</h4>
                <p>Horizontal</p>
            </div>
    
            <div class="player-info-card">
                <h4>Class</h4>
                <p>N/A</p>
            </div>
        </div>
    
        <div id="player-bio-card">
            <h4>Bio</h4>
            <p>Served their purpose in the combat trial and is now deceased.</p>
        </div>
    
        <div id="player-stats">
            <div class="stat-card">
                <h4>Vitality</h4>
                <p>0</p>
            </div>
    
            <div class="stat-card">
                <h4>Agility</h4>
                <p>0</p>
            </div>
    
            <div class="stat-card">
                <h4>Focus</h4>
                <p>0</p>
            </div>
            
            <div class="stat-card">
                <h4>Luck</h4>
                <p>Bad</p>
            </div>
    
            <div class="stat-card">
                <h4>Strength</h4>
                <p>None</p>
            </div>
    
            <div class="stat-card">
                <h4>Dexterity</h4>
                <p>None</p>
            </div>
    
            <div class="stat-card">
                <h4>Arcana</h4>
                <p>None</p>
            </div>
    
            <div class="stat-card">
                <h4>Charisma</h4>
                <p>None</p>
            </div>
        </div>
        `;
    
        // show player vitals panel
        document.getElementById("player-vitals").style.display = 'grid';
        // add player stats to vitals area
        document.getElementById("player-vitals").innerHTML = `
        <div id="vitals-player-name">
            <p>Dstroyed Spellbound Arena Combatant</p>
        </div>
    
        <div id="vitals-player-vit">
            <h4>Vitality</h4>
            <p>0</p>
        </div>
        <div id="vitals-player-arm">
            <h4>Armor</h4>
            <p>0</p>
        </div>
        <div id="vitals-player-agi">
            <h4>Agility</h4>
            <p>0</p>
        </div>
        <div id="vitals-player-foc">
            <h4>Focus</h4>
            <p>0</p>
        </div>
        `;
    
        // update enemy status
        document.getElementById("enemy-info").innerHTML = `
        <div id="enemy-name-card">
            <h3>Enemy</h3>
            <p>Destroyed Hostile Evil Reactive Organism</p>
        </div>
    
    
        <div id="enemy-info-container">
            <div class="enemy-info-card">
                <h4>Enemy Type</h4>
                <p>N/A</p>
            </div>
            <div class="enemy-info-card">
                <h4>Enemy Class</h4>
                <p>N/A</p>
            </div>
        </div>
    
        <div id="enemy-stats">
            <div class="stat-card">
                <h4>Vitality</h4>
                <p>0</p>
            </div>
    
            <div class="stat-card">
                <h4>Agility</h4>
                <p>0</p>
            </div>
    
            <div class="stat-card">
                <h4>Focus</h4>
                <p>0</p>
            </div>
    
            <div class="stat-card">
                <h4>Luck</h4>
                <p>Bad</p>
            </div>
    
            <div class="stat-card">
                <h4>Strength</h4>
                <p>None</p>
            </div>
    
            <div class="stat-card">
                <h4>Dexterity</h4>
                <p>None</p>
            </div>
    
            <div class="stat-card">
                <h4>Arcana</h4>
                <p>None</p>
            </div>
    
            <div class="stat-card">
                <h4>Charisma</h4>
                <p>None</p>
            </div>
        </div>
        `;
    
        //show enemy vitals panel
        document.getElementById("enemy-vitals").style.display = 'grid';
        // add enemy stats to vitals area
        document.getElementById("enemy-vitals").innerHTML = `
        <div id="vitals-enemy-name">
            <p>Destroyed Hostile Evil Reactive Organism</p>
        </div>
        <div id="vitals-enemy-vit">
            <h4>Vitality</h4>
            <p>0</p>
        </div>
        <div id="vitals-enemy-arm">
            <h4>Armor</h4>
            <p>0</p>
        </div>
        <div id="vitals-enemy-agi">
            <h4>Agility</h4>
            <p>0</p>
        </div>
        <div id="vitals-enemy-foc">
            <h4>Focus</h4>
            <p>0</p>
        </div>
        `;
};

// SECTION FOR PROCESSING PLAYER TURNS AND ACTIONS
let turn = 'player';

const playerTurn = (player, enemy) => {
    log(`It is the SAC's turn to act.`)
    return new Promise((resolve, reject) => {
      // add event listener to each action button
      const attackButton = document.getElementById("basic-attack");
      const defendButton = document.getElementById("defend");
  
      const handleAttack = () => {
        player.playerAttack(enemy);
        attackButton.removeEventListener("click", handleAttack);
        defendButton.removeEventListener("click", handleDefend);
        resolve();
      };
  
      const handleDefend = () => {
        player.playerDefend();
        attackButton.removeEventListener("click", handleAttack);
        defendButton.removeEventListener("click", handleDefend);
        resolve();
      };
  
      attackButton.addEventListener("click", handleAttack);
      defendButton.addEventListener("click", handleDefend);
    }).finally(() => {
      // switch the turn to be the enemy's
      turn = "enemy";
    
      // update the DOM after the player's action is taken
      updateDOM();
      log(`The SAC's turn is over now.`)
    });
};
  

const enemyTurn = async (enemy, player) => {
    log(`It is the ${enemy.type}'s turn to act.`) 
    // wait for 1 second to give the player a chance to see the enemy's action
    await new Promise(resolve => setTimeout(() => {
      let enemyDiceRoll = getRandomInt(3);
    
      switch (enemyDiceRoll) {
        case 2:
          enemy.enemyAttack(player);
          break;
        case 1:
          enemy.enemyDefend();
          break;
        default:
          enemy.enemyAttack(player);
          break;
      }
    
      //update the DOM after the enemy's action is taken
      updateDOM();
  
      //switch the turn back to the player's
      turn = 'player';
      log(`The ${enemy.type}'s turn has ended.`)
    }, 1000));
};

const gameWinEnd = () => {
    pageTitle.innerHTML="Cleanup"
    log(`The Spellbound Arena Combatant lowers their weapons and breaths a sigh of relief before the now all-too-familiar voice drones out from the loudspeakers.`);
    setTimeout(function() {
        setTimeout(function() {
            log(`"Clearing combat arena and preparing for new trial."`);
        }, 2000);
        setTimeout(function() {
            log(`Laser arrays similar to the ones in the birthing vat room pop out from the ceiling of the combat arena.`);
        }, 4000);
        setTimeout(function() {
            log(`As soon as they've cleared their housing, the lasers fire blinding purple beams that sweep the entire room. Once your eyes regain their sight, you can see that the room is spotless`);
            clearDOM();
            player = {};
            enemy = {};
        }, 6000);
        setTimeout(function() {
            beginButton.addEventListener("click", beginGame);
            beginButton.style.display = 'inline-block';
            log(`Your control terminal asks you to begin the process again.`)
        }, 8000)
    }, 2000);

};

const gameLossEnd = () => {
    pageTitle.innerHTML="Cleanup"
    log(`The Hostile lowers their weapons and begins catching their breath. Your SAC lies in a bloody pile at their feet.`);
    setTimeout(function() {
        setTimeout(function() {
            log(`"Clearing combat arena and preparing for new trial."`);
        }, 2000);
        setTimeout(function() {
            log(`Laser arrays similar to the ones in the birthing vat room pop out from the ceiling of the combat arena.`);
        }, 4000);
        setTimeout(function() {
            log(`As soon as they've cleared their housing, the lasers fire blinding purple beams that sweep the entire room. Once your eyes regain focus, you can see that the room is spotless`);
            clearDOM();
            player = {};
            enemy = {};
        }, 6000);
        setTimeout(function() {
            beginButton.addEventListener("click", beginGame);
            beginButton.style.display = 'inline-block';
            log(`Your control terminal asks you to begin the process again.`)
        }, 8000)
    }, 2000);

};

const gameLoop = async (player, enemy, winToken) => {
    if (player.vitality > 0 && enemy.vitality > 0) {
      if (turn === 'player') {
        // show the player action buttons again at the end of the enemy's turn
        playerCombat.classList.remove("hidden");
        await playerTurn(player, enemy);
        // hide the player action buttons as a visual indicator that it is the enemy's turn
        playerCombat.classList.add("hidden");
        turn = 'enemy';
        gameLoop(player, enemy, winToken)
      } else {
        // introduce a delay of 1 second before the enemy's turn begins
        setTimeout(() => {
          enemyTurn(enemy, player);
          turn = 'player';
          updateDOM();
          setTimeout(() => {
            gameLoop(player, enemy, winToken);
          }, 2000);
        }, 1000);
      }
    } else {
      if (player.vitality <= 0) {
        setTimeout(function() {
          log(`Your SAC took a harsh beating and was destroyed by the ${enemy.type}.`);

          return; // Exit the function after the defeat block is executed
        }, 2000);         
          
      } else {
        setTimeout(function() {
          log(`Your ${player.className} decimated ${enemy.name} the ${enemy.type}. Well done.`);
    
          setTimeout(function() {
            log(`The voice beems out over the loudspeakers again: "Logging combat trial results. Allocating improvement algorithms."`)
            winToken.tokenCount += 1;
          }, 500);
        
          setTimeout(function() {
            log(`You now have ${winToken.tokenCount} Victory Token(s). You may use these tokens to improve the capabilities of future Spellbound Arena Combatants.`)
          }, 1000);
          
          gameWinEnd();
          return; // Exit the function after the victory block is executed
        }, 2000)
      }
    }
  };
  
  

const beginGame = () => {
    //set page title
    pageTitle.innerHTML = `Creation in Progress`

    //throw some flavor text to the log for the player
    setTimeout(function() {
        log(`You hear a monotonous robotic voice over unseen speakers: "Initializing matter reconfiguration lasers."`)
    }, 500);
    setTimeout(function() {
        log(`Below you there is a grotesque swirl of color in the vat as you hear the voice report: "Adjusting matter slurry concentration within birthing vat."`)
    }, 2500);
    setTimeout(function() {
        log(`There is a definite increase in temperature in your control room accompanied by blinding green light as the voice coninues; "Lasers at maximum power. Commencing matter deconstruction."`)
    }, 4500);
    setTimeout(function() {
        log(`The glass in front of you has thankfully fogged over as the green light fades. The lasers begin firing painfully bright (even through the fog), violet, strobing beams of energy. The robotic voice is undeterred: "Moisture levels optimal. Cycling pulse lasers for matter reconstitution."`)
    }, 6500);
    setTimeout(function() {
        log(`The robotic voice drones on even though it just created life. Or did you? You were the one that pressed the button after all. "Arena Combatant creation achieved. Spellbinding process beginning"`)
    }, 8500);
    setTimeout(function() {
        log(`A robotic arm descends from the ceiling of the room and waves a decidedly non-robotic staff at the figure in the vat as the side of the vat opens. The robotic voice reports: "Spellbinding complete. Spellbound Arena Combatant (S.A.C.) creation complete."`)
    }, 11000);
    setTimeout(function() {
        log(`The voice has gone silent. Did someone really decide "S.A.C" was the best name for this creation? In the room below you a figure steps out of the birthing vat as the fog begins to clear.`)
    }, 12000);
    setTimeout(function() {
        log(`You notice new information on your terminal. How does this... SAC have a name and a biography? that makes no sense, it was... born? Manufactured? Just now as you watched. You notice there seems to also be information about an enemy combatant.`)
    }, 14000)
    setTimeout(function() {
        log(`The birthing vat sinks into the floor and the pulse lasers withdraw into the ceiling of the room. An entire wall of the room slides down into the floor, doubling the already massive size.`)
    }, 16000);
    setTimeout(function() {
        log(`The room below you now stands twice as large and twice as occupied. In the newly revealed section of the room is a clearly hostile being. The first figure readies their weaponry and waits.`)
    }, 18000);

    //hide the begin button
    beginButton.style.display = 'none';

    //generate a character for the player to control
    player = generateCharacter();

    //generate an enemy upon which to do glorious combat
    enemy = generateEnemy();

    // wait for the flavor text from generateCharacter to end then update the DOM.
    setTimeout(function(){
        if (winToken.tokenCount >= 1) {
            updateDOM();
            for (let i = 0; i < statUp.length; i++) {
                statUp[i].classList.remove('hidden');
              };
        } else {
            updateDOM();
            for (let i = 0; i < statUp.length; i++) {
                statUp[i].classList.add('hidden');
              };
        };
    }, 14000);

    //once the creation flavor text is done, begin combat phase
    setTimeout(function() {
        pageTitle.innerHTML = `Combat Trial`
    }, 19000);
    setTimeout(function() {
        // initiate the gameplay loop after the falvor text has finished playing out
        gameLoop(player, enemy, winToken);
    }, 20000);



    //remove event listener from begin button
    beginButton.removeEventListener("click", beginGame);
};

beginButton.addEventListener("click", beginGame);