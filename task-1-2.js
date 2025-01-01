/*
This task states that user input should be matched against "John" string.
But, it is unclear whether user input should be matched against exactly or loosely.
I decided to sanitise user input for loose matching.
In case this is not the correct behaviour sanitization logic can be removed.

```
import readline from "readline";

const EXPECTED_NAME = "John"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Enter a name: ', (personName) => {
    if (personName === EXPECTED_NAME) {
        console.log("Hello, John")
    } else {
        console.log("There is no such name")
    }

    rl.close();
});
```
*/

import readline from "readline";

const EXPECTED_NAME = "john"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Enter a name: ', (personName) => {
    const sanitizedName = personName.trim().toLowerCase();
    if (sanitizedName === EXPECTED_NAME) {
        console.log("Hello, John")
    } else {
        console.log("There is no such name")
    }

    rl.close();
});
