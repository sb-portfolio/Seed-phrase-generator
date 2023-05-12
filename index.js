import {wordsArray as seedWords} from "./words2.js"

const seedPhraseLengthEl = document.getElementById("seed-length")
const generateSeedPhraseBtn = document.getElementById("generate-btn")
const seedPhraseOutputEl = document.getElementById("seed-phrase-output")
generateSeedPhraseBtn.addEventListener("click", createSeedPhrase)

function createSeedPhrase(){
    const seedPhraseLength = seedPhraseLengthEl.value;
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
    seedPhraseOutputEl.innerHTML = ""
    seedPhrase.forEach(word => {
        seedPhraseOutputEl.innerHTML += `<div class="seed-word">${word[0].toUpperCase()}${word.slice(1)}</div>`
    })
    console.log(seedPhrase)
}