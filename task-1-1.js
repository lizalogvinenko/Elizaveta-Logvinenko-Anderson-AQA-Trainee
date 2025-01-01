import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Enter a number: ', (enteredText) => {
    const enteredNumber = parseInt(enteredText);

    if (isNaN(enteredNumber)) {
        console.log("That's not a valid input")
    } else if (enteredNumber > 7) {
        console.log("Hello")
    }

    rl.close();
});