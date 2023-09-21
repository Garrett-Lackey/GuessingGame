const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
// rl.question('What do you think of Node.js? ', (answer) => {
//     // TODO: Log the answer in a database
//     console.log(`Thank you for your valuable feedback: ${answer}`);
  
//     rl.close();
//   });

secretNumber = 29;
totalGuesses = 5;
maxGuess = 100;
minGuess = 0;

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
const randomInRange = (min, max) => {
    return Math.floor((max - min) * Math.random()) + min;
}

const askRange = () =>{
    rl.question('Enter a max number: ', (answer1) =>{
        maxGuess = +answer1;
        rl.question('Enter a min number: ', (answer2) =>{
            minGuess = +answer2;
            secretNumber = randomInRange(minGuess, maxGuess);
            askGuess();
            })
    })
}

askRange()