import {wordsArray as seedWords} from "./words.js"

const seedPhraseLengthEl = document.getElementById("seed-length")
const generateSeedPhraseBtn = document.getElementById("generate-btn")
const seedPhraseOutputEl = document.getElementById("seed-phrase-output")
const numberOfSeedWords = seedWords.length

generateSeedPhraseBtn.addEventListener("click", createSeedPhrase)

const randomNumber = () => Math.floor(Math.random()*numberOfSeedWords);
const randomWord = () => seedWords[randomNumber()];
const wordNotAlreadyUsed = (array, word) => !array.includes(word)
const addWordToSeedPhrase = (phrase, word) => phrase.push(word);

function renderSeedPhrase(seedPhraseArray){
    seedPhraseOutputEl.innerHTML = ""

    seedPhraseArray.forEach(word => {
        seedPhraseOutputEl.innerHTML += `<div class="seed-word">${word[0].toUpperCase()}${word.slice(1)}</div>`
    })
}

function createSeedPhrase(){
    const seedPhraseLength = seedPhraseLengthEl.value;
    let chosenWord = ""
    let seedPhrase = [];
    
    while (seedPhrase.length<seedPhraseLength){

        chosenWord = randomWord()

        if(wordNotAlreadyUsed(seedPhrase, chosenWord)){
            addWordToSeedPhrase(seedPhrase,chosenWord)
        }
    }
    renderSeedPhrase(seedPhrase)
}