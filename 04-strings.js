const hi = 'Hello, World!'; // Single Quotes

console.log(
    'typeof hi:',
    typeof hi,    // "string"
    hi            // "Hello, World!"
);

const otherHi = 'Hi there, I\'m using an escaped character!';
const otherOtherHi = "Hi there, I'm using an escaped character!";

const greeting = 'Hello, ';
const name = 'Dustin';

const fullPhrase = greeting + name; // + concatenates (glues) strings together.
console.log(
    'typeof fullPhrase:',
    typeof fullPhrase,    // "string"
    fullPhrase + '!'      // "Hello, Dustin!"
);

// Newlines are \n, tabs are \t
// On Windows sometimes you'll see people use \r\n
console.log('Old-fashioned new-line:\n\tThis text is on a new line! And tabbed!');

// String interpolation (uses back ticks)
// Note that back-ticks strings are new-line sensitive!
const multiLineGreeting = `Here is a greeting:
${greeting + name}
Isn't that lovely?`;

console.log(
    'typeof multiLineGreeting:',
    typeof multiLineGreeting,    // "string"
    multiLineGreeting
);