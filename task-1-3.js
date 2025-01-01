/*
This task does not specify a separator between the input numbers.
For our solution, we can use a space " " as a separator.
It is unclear whether 0 should be considered as part of the array of numbers that are multiples of 3.
Let's assume that the condition with 0 is not applicable to our solution.
Additionally, we can include some clarifying messages in case of incorrect input.
*/

import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Enter numbers (separated with space): ', (enteredText) => {
    if (!enteredText.trim()) {
        console.log('Input is empty');
        rl.close();
        return;
    }

    const numberArray = enteredText.split(' ').map(Number);

    if (numberArray.some(isNaN)) {
        console.log('Please enter only numbers');
        rl.close();
        return;
    }

    const result = numberArray.filter(num => num % 3 === 0 && num !== 0);

    console.log(result);

    rl.close();
});