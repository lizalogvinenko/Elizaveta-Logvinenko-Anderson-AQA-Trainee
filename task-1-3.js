/*
This task does not specify a separator between the input numbers.
For our solution, we can use a space " " as a separator.
It is unclear whether 0 is multiple of 3. Let's assume that it is.
Additionally, we can include some clarifying messages in case of incorrect input.
*/

import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Enter numbers (separated with space): ', (enteredText) => {
    if (enteredText.trim().length === 0) {
        console.log('Input is empty');
        rl.close();
        return;
    }

    const numberArray = enteredText.split(' ')
        .filter((item) => item.length !== 0)
        .map(Number);

    if (numberArray.some(isNaN)) {
        console.log('Please enter only numbers');
        rl.close();
        return;
    }

    const result = numberArray.filter(num => num % 3 === 0);

    console.log(result);

    rl.close();
});