
// i need way to have huge random word list
const words = ["the", "be", "to", "of", "and", "a", "in", "that", "have", "I", "it", 
               "for", "not", "on", "with", "he", "as", "you", "do", "at", "this", 
               "but", "his", "by", "from", "they", "we", "say", "her", "she", "or", 
               "an", "will", "my", "one", "all", "would", "there", "their", "what", 
               "so", "up", "out", "if", "about", "who", "get", "which", "go", "me", 
               "when", "make", "can", "like", "time", "no", "just", "him", "know", 
               "take", "person", "into", "year", "your", "good", "some", "could", 
               "them", "see", "other", "than", "then", "now", "look", "only", "come", 
               "its", "over", "think", "also", "back", "after", "use", "two", "how", 
               "our", "work", "first", "well", "way", "even", "new", "want", "because", 
               "any", "these", "give", "day", "most", "us"];

let ind = generateNonRepeatedNumbers(0, words.length - 1, words.length);


let counter = 2;
const word = document.getElementById("word");
const typed = document.getElementById("typed");
let type = '';
let letter = 0;
word.innerHTML = words[ind[counter]].toLowerCase();
document.addEventListener("keydown", handleKeyPress);

function handleKeyPress(event) {

    type = type.toLowerCase();
    const currentWord = words[ind[counter]].toLowerCase();

    //cheking the typing
    const key = event.key;
    if (key === currentWord[letter]) {
        type += key;
        letter ++;
        typed.innerHTML = type;

        if (type == currentWord) {

            word.style.top = 0;
            typed.style.top = 0;
            marginTop = 0;

            //console.log(`Pressed key: ${type}`);

            letter = 0;
            counter++;

            typed.innerHTML = type;
            type = '';
            
            console.log('True');
                if (counter >= words.length) {
                    counter = 0;
                }
            
            word.innerHTML = words[ind[counter]].toLowerCase();
            typed.innerHTML = type;

        }
    }
    
}
let marginTop = 0;
function moveDiv() {
    word.style.top = marginTop + 'px';
    typed.style.top = marginTop + 'px';
    marginTop += 1; // Adjust the speed as needed
}

setInterval(moveDiv, 100); // Adjust the interval (milliseconds) for smoother animation


function generateNonRepeatedNumbers(min, max, count) {
    if (count > max - min + 1) {
        console.error('Cannot generate more unique numbers than the range allows.');
        return [];
    }

    const allNumbers = Array.from({ length: max - min + 1 }, (_, i) => i + min);
    const shuffledNumbers = [...allNumbers];

    // Fisher-Yates shuffle
    for (let i = shuffledNumbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledNumbers[i], shuffledNumbers[j]] = [shuffledNumbers[j], shuffledNumbers[i]];
    }

    return shuffledNumbers.slice(0, count);
}

