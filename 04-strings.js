// What are strings?
// Text! Combination of characters.

const myString = 'Hello, World!';

console.log('myString:', typeof myString, myString);

// Concatenation:
// Joining together multiple strings.
const greeting = 'Hello, ';
const name = 'Bushra';

const fullGreetingText = greeting + name;
console.log('fullGreetingText:', typeof fullGreetingText, fullGreetingText);

// Here's a gotcha'!
console.log('3 + 3 =', 3 + 3); // Number(6) -> BOTH sides must be a number to do addition!
console.log('\'3\' + 3 =', '3' + 3); // '33' -> if EITHER side is string, it concatenates!
         // "'3' + "

let multilineSingleQuoteString = 'Hello! Now there is a new line:\nI am on the new line!';
console.log('multilineSingleQuoteString:', multilineSingleQuoteString);

// Interpolation:
// String template literal! A way we can include values/expressions in a string
// without concatenation.

const myInterpolatedString = `Hi! I am an interpolated string.
I support new-lines by default.

This makes it easy to format text the way you'd like!

3 + 3 = ${3 + 3} <- We can run expressions!

Hello, ${name}! Now this is interpolated! 😁
`;

console.log('myInterpolatedString:', myInterpolatedString);


function hello() {
    return 'Hello, World!';
}

console.log(`

    Function: ${hello()}
    Object:   ${{school: 'Lighthouse Labs'}}
    Array:    ${[1, 2, 3]}

`);

const nullAsAString = String(null);
console.log('nullAsAString:', nullAsAString);

console.log('55\%');
