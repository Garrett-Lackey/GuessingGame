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

        if (result) {
            console.log("You Win!");
            rl.close();
        } else {
            askGuess();
        }
    });

}

askGuess();