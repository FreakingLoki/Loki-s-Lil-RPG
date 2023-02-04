//define functions for stats

// luck has an effect on all other stat rolls
const genLuck = () => {
    let luck = Math.floor(Math.random() * 50);
    return luck;
}

//roll for strength and add luck
const genStrength = luck => {
    let numSTR = Math.floor(Math.random() * 50);
    numSTR += luck;
    return numSTR;
}

//  roll for vitality, add 1/2 STR and add luck
const genVitality = (luck, strength) => {
    let numVIT = Math.floor(Math.random() * 50);
    numVIT += Math.floor(((0.5 * strength) + luck));
    return numVIT
}

// roll for intelligence and add luck
const genIntelligence = luck => {
    let numINT = Math.floor(Math.random() * 50);
    numINT += luck;
    return numINT;
}

// roll for wisdom, add 1/2 INT
const genWisdom = (luck, intelligence) => {
    let numWIS = Math.floor(Math.random() * 50);
    numWIS +=  Math.floor(((0.5 * intelligence) + luck));
    return numWIS;
}

const genCharisma = luck => {
    let numCHA = Math.floor(Math.random() * 50);
    numCHA += Math.floor((0.25 * luck));
    return numCHA
}

//get values for the stats
const LCK = genLuck();
const STR = genStrength(LCK);
const VIT = genVitality(LCK, STR);
const INT = genIntelligence(LCK);
const WIS = genWisdom(LCK, INT);
const CHA = genCharisma(LCK);


console.log(`Luck or LCK: ${LCK}`);
console.log(`Strength or STR: ${STR}`);
console.log(`Vitality or VIT: ${VIT}`);
console.log(`Intelligence or INT: ${INT}`);
console.log(`Wisdom or WIS: ${WIS}`);
console.log(`Charisma or CHA: ${CHA}`);