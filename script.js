//define functions for stats

// luck has an effect on all other stat rolls
const genLuck = () => {
    let luck = Math.floor(Math.random() * 51);
    return luck;
};

//roll for strength and add luck
const genStrength = luck => {
    let numSTR = Math.floor(Math.random() * 51);
    numSTR += luck;
    return numSTR;
};

//  roll for vitality, add 1/2 STR and add luck
const genVitality = (luck, strength) => {
    let numVIT = Math.floor(Math.random() * 51);
    numVIT += Math.floor(((0.5 * strength) + luck));
    return numVIT
};

// roll for intelligence and add luck
const genIntelligence = luck => {
    let numINT = Math.floor(Math.random() * 51);
    numINT += luck;
    return numINT;
};

// roll for wisdom, add 1/2 INT
const genWisdom = (luck, intelligence) => {
    let numWIS = Math.floor(Math.random() * 51);
    numWIS +=  Math.floor(((0.5 * intelligence) + luck));
    return numWIS;
};

const genCharisma = luck => {
    let numCHA = Math.floor(Math.random() * 51);
    numCHA += Math.floor((0.25 * luck));
    return numCHA
};

//name generator
const genName = () => {
    //arrays of names
    let firstNames = [
        'Daryndel', 'Azura', 'Deliadorn', 'Hrothgar', 'Faelivrin', 'Lothlorien', 
        'Tathariel', 'Eilinel', 'Galathil', 'Arweniel', 'Eadwynn', 'Nessa', 'Rhudaur', 
        'Thrainor', 'Melwasul', 'Elara', 'Thorne', 'Kael', 'Niamh', 'Aelric', 
        'Seraphina', 'Evangeline', 'Orion', 'Isolde', 'Lorcan', 'Calla', 'Lysandra', 
        'Dante', 'Ariadne', 'Galen'
    ];
    let lastNames = [
        'Fireheart', 'Starweaver', 'Snowfoot', 'Ironfist', 'Moonblade',
        'of the Wood', 'Stormchaser', 'Moonlit', 'Forestwhisper', 'Shadowblade', 
        'Oceanheart', 'Wildwood', 'Watersinger', 'Wanderer', 'Thundercaller',
        'Shadowhunter', 'Stormcaller', 'Nightingale', 'Bloodhound', 'Silverclaw',
        'Frostheart', 'Wildwood', 'Thunderstrike', 'Blackthorn', 'Moonblade', 
        'Starweaver', 'Ironfist', 'Fireheart', 'Riverstone', 'Windrider'
    ];

    //randomize numbers to get ready to select name
    let numOne = Math.floor(Math.random() * (firstNames.length +1));
    let numTwo = Math.floor(Math.random() * (lastNames.length +1));

    let charName = firstNames[numOne] + ' ' + lastNames[numTwo];
    return charName;

};

//get values for the stats
const LCK = genLuck();
const STR = genStrength(LCK);
const VIT = genVitality(LCK, STR);
const INT = genIntelligence(LCK);
const WIS = genWisdom(LCK, INT);
const CHA = genCharisma(LCK);
//generate a name
const charName = genName();

console.log(`Name: ${charName}`)
console.log(`Luck or LCK: ${LCK}`);
console.log(`Strength or STR: ${STR}`);
console.log(`Vitality or VIT: ${VIT}`);
console.log(`Intelligence or INT: ${INT}`);
console.log(`Wisdom or WIS: ${WIS}`);
console.log(`Charisma or CHA: ${CHA}`);