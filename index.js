import wordsArray from "./words.js"

const seedWords = Object.values(wordsArray);
const seedPhraseLength = 12;
const numberOfSeedWords = seedWords.length
let randomSeedPosition
let chosenWord = ""
let seedPhrase = [];

while (seedPhrase.length<seedPhraseLength){
    
    randomSeedPosition = Math.floor(Math.random()*numberOfSeedWords);
    chosenWord = seedWords[randomSeedPosition];

    if(!seedPhrase.includes(chosenWord)){
        seedPhrase.push(chosenWord);
    }
}


console.log(seedPhrase)