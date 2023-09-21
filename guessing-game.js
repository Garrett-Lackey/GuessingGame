const readline = require('node:readline');

// Define ability to get console inputs
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

// Global Variables
secretNumber = 29;
totalGuesses = 5;
maxGuess = 100;
minGuess = 0;

// Check whether num is equal to secret number
const checkGuess = (num) => {
    if (num > secretNumber) {
        console.log("Too high!");
        return false;
    } else if (num < secretNumber) {
        console.log("Too low!")
        return false;
    } else {
        console.log("Correct!");
        return true;
    }
}

// Ask the player what their guess is, 
// and handle the result using checkGuess,
// and stop playing when guesses run out
const askGuess = () => {
    let result;

    rl.question("Enter a guess: ", (answer) => {
        result = checkGuess(answer);
        totalGuesses--;

        if (result) {
            console.log("You Win!");
            rl.close();
        } else if (totalGuesses) {
            console.log(`${totalGuesses} guesses left!`)
            askGuess();
        } else if (!totalGuesses) {
            console.log("TOO MANY GUESSES!!!");
            console.log("You lose!");
            rl.close();
        }
    });

}

// Generate random value between two values
const randomInRange = (min, max) => {
    return Math.floor((max - min) * Math.random()) + min;
}

// Limit totalGuesses based on the range of secretNumber
const dynamicLimit = () => {
    let tempTotal = 2;
    totalGuesses = 0;
    while (tempTotal < maxGuess - minGuess)  {
        totalGuesses++;
        tempTotal *= 2;
    }
}

// Ask the player for range to play within,
// and generate totalGuesses using dynamicLimit,
// and generate secretNumber using randomInRange
const askRange = () =>{
    rl.question('Enter a max number: ', (answer1) =>{
        maxGuess = +answer1;
        rl.question('Enter a min number: ', (answer2) =>{
            minGuess = +answer2;

            dynamicLimit();
            console.log(`You have ${totalGuesses} guesses.`)

            secretNumber = randomInRange(minGuess, maxGuess);
            askGuess();
            })
    })
}

// Start the game loop
askRange()