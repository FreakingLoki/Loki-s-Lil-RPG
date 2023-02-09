// define random number generator function
const getRandomInt = multiplier => {
    const randomInt = Math.floor(Math.random() * multiplier);
    return randomInt;
}

// define randomized number generator based on a parent stat and a luck stat
// stats using this function have a beginning value of 20
const getComplexInt = (base, luck, multiplier, parentStat) => {
    const complexInt = base + Math.floor(((multiplier * parentStat) + luck));
    return complexInt;
}

// define function for determining value of a stat based only on luck
const getStat = (luck, multiplier) => {
    const stat = getRandomInt(multiplier) + luck
    return stat;
}



// define name generator function
const genName = () => {
    // array of possible first names
    const firstNames = [
        'Daryndel', 'Azura', 'Deliadorn', 'Hrothgar', 'Faelivrin', 'Lothlorien', 
        'Tathariel', 'Eilinel', 'Galathil', 'Arweniel', 'Eadwynn', 'Nessa', 'Rhudaur', 
        'Thrainor', 'Melwasul', 'Elara', 'Thorne', 'Kael', 'Niamh', 'Aelric', 
        'Seraphina', 'Evangeline', 'Orion', 'Isolde', 'Lorcan', 'Calla', 'Lysandra', 
        'Dante', 'Ariadne', 'Galen', 'Mei-Lai', 'Jesse', 'Freaking', 'Loki', 'Partyboy', 
        'Anti', 'Belle', 'Jasmine', 'Ron', 'John', 'Griffin', 'Travis', 'Justin', 'Sydnee', 
        'Rachel', 'Teresa'
    ];

    // array of possible last names
    const lastNames = [
        'Fireheart', 'Starweaver', 'Snowfoot', 'Ironfist', 'Moonblade',
        'of the Wood', 'Stormchaser', 'Moonlit', 'Forestwhisper', 'Shadowblade', 
        'Oceanheart', 'Wildwood', 'Watersinger', 'Wanderer', 'Thundercaller',
        'Shadowhunter', 'Stormcaller', 'Nightingale', 'Bloodhound', 'Silverclaw',
        'Frostheart', 'Wildwood', 'Thunderstrike', 'Blackthorn', 'Moonblade', 
        'Starweaver', 'Ironfist', 'Fireheart', 'Riverstone', 'Windrider', 'of the Hills', 
        'of the Stars', 'of the Moon', 'of the Lambs', 'of the Elms', 'McCool Guy', 
        'Goodparty', 'Patience', 'Johnson', 'Smith', 'Ronson', 'Paulson'
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

    //arrays of intelligence character bios
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
    }
    // get a random index to use with the array of biographies
    const num = getRandomInt(classBio.length);

    // choose a random biography based on the random index
    const randomClassBio = classBio[num];

    //return the randomized biography
    return randomClassBio;
      
};

// define class selection function
const getClass = (STR, DEX, INT, CHA, LCK) => {

    let determinedClass = ''

    // strength based classes
    if (STR > DEX && STR > INT) {
        if (DEX > CHA && INT > CHA) {
            determinedClass = 'Barbarian'
        } else if (DEX > INT && DEX > CHA) {
            determinedClass = 'Warrior'
        } else if (INT > DEX && INT > CHA) {
            determinedClass = 'Paladin'
        } else if (CHA > INT && CHA > DEX) {
            determinedClass ='Warlord'
        } else {
            determinedClass = 'Fighter'
        }
    }
    // dexterity based classes
    if (DEX > STR && DEX > INT) {
        if (STR > INT && STR > CHA) {
            determinedClass = 'Archer'
        } else if (CHA < INT && CHA < STR) {
            determinedClass = 'Ranger'
        } else if (CHA > INT && CHA > STR) {
            determinedClass = 'Rogue'
        } else {
            determinedClass = 'Thief'
        }
    // intelligence based classes
    } if (INT > STR && INT > DEX) {
        if (STR < DEX && STR < CHA) {
            determinedClass = 'Wizard'
        } else if (STR > DEX && STR > CHA) {
            determinedClass = 'Warlock'
        } else if (DEX < STR && DEX < CHA) {
            determinedClass = 'Druid'
        } else if (DEX > STR && DEX > CHA) {
            determinedClass = 'Illusionist'
        } else {
            determinedClass = 'Sorcerer'
        }
    // charisma based classes
    } if (CHA > STR && CHA > INT) {
        if (LCK >= 50) {
            determinedClass = 'Party Animal'
        } else if (INT > STR && INT > DEX) {
            determinedClass ='Cleric'
        } else {
            determinedClass = 'Bard'
        }

    };

    return determinedClass;
};

// luck has an effect on all other stat rolls and has to be rolled for first
const LCK = getRandomInt(51);

// roll for basic stats
const STR = getStat(LCK, 51);
const DEX = getStat(LCK, 51);
const INT = getStat(LCK, 51);
const CHA = getStat(LCK, 51);

// roll for stats based on a parent stat
const VIT = getComplexInt(20, LCK, 1.4, STR);
const AGI = getComplexInt(20, LCK, 1.4, DEX);
const WIS = getComplexInt(20, LCK, 1.4, INT);

const charClass = getClass(STR, DEX, INT, CHA, LCK);


// generate a randomized name
const charName = genName();

// generate a randomized alignment
const charAlign = getAlignment();

// get a randomized biography
const charBio = genBio(charClass);

// output the character sheet
console.log(`Name: ${charName}`);
console.log(`Alignment: ${charAlign}`);
console.log(`Class: ${charClass}`);
console.log(`Bio: ${charBio}`);
console.log(`Luck: ${LCK}`);
console.log(`Strength: ${STR}`);
console.log(`Vitality: ${VIT}`);
console.log(`Dexterity: ${DEX}`);
console.log(`Agility: ${AGI}`);
console.log(`Intelligence: ${INT}`);
console.log(`Wisdom: ${WIS}`);
console.log(`Charisma: ${CHA}`);