import wordsArray from "./words.js"

const seedWords = Object.values(wordsArray);
const seedPhraseLength = 12;
const numberOfSeedWords = seedWords.length
let randomSeedPosition
let chosenWord = ""
let seedPhrase = [];

for (let i=0; i<seedPhraseLength; i++){
    randomSeedPosition = Math.floor(Math.random()*numberOfSeedWords);
    chosenWord = seedWords[randomSeedPosition];
    seedPhrase.push(chosenWord);
}


console.log(seedPhrase)