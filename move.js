let level = 3;
let enemyCount = level*2+1;
let counter = 0;


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


for (let i=0; i<enemyCount; i++) {
    let word = words[ind[counter]];
    counter ++;
    if (counter >= words.length) {
        counter = 0;
    }
    createElement(word);
}

// Get the hero element
const heroElement = document.querySelector(".hero");

// Get all "word" elements
const wordElements = document.querySelectorAll(".word");

// Function to calculate distance between two points
function calculateDistance(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}

// Loop through each "word" element
wordElements.forEach((wordElement) => {
    const wordRect = wordElement.getBoundingClientRect();
    const heroRect = heroElement.getBoundingClientRect();
    const wordX = wordRect.left + heroRect.width / 2;
    const wordY = wordRect.top + heroRect.height / 2;

    // Calculate the distance between word and hero
    const distance = calculateDistance(wordX, wordY, heroElement.offsetLeft, heroElement.offsetTop);

    // Set a transition duration based on distance (adjust as needed)
    const minDuration = 1; // Minimum duration in seconds
    const maxDuration = 20; // Maximum duration in seconds
    const duration = Math.random()* (maxDuration - minDuration) + minDuration; // Adjust the divisor as needed

    // Apply the transition
    wordElement.style.transition = `transform ${duration}s ease-in-out`;

    // Calculate translation toward the hero
    const dx = heroElement.offsetLeft - wordX;
    const dy = heroElement.offsetTop - wordY;
    wordElement.style.transform = `translate(${dx}px, ${dy}px)`;
});


function getRandomCoordinates(containerWidth, containerHeight) {
    const x = Math.random() * (containerWidth - 40); // Adjust for word element width
    const y = Math.random() * (containerHeight); // Adjust for word element height
    return { x, y };
}



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




function createElement(word) {

    const wsWrapper = document.getElementById("ws-wrapper");
    const wordDiv = document.createElement("div");
    wordDiv.className = "word";

    wordDiv.textContent = word;

    const containerRect = wsWrapper.getBoundingClientRect();
    const { x, y } = getRandomCoordinates(containerRect.width, containerRect.height);

    // Apply the coordinates to the word div
    wordDiv.style.left = `${x}px`;
    wordDiv.style.top = `${y}px`;


    wsWrapper.appendChild(wordDiv);

}
