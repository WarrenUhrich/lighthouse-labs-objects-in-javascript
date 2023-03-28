// Single quotes
const hiThere = 'Hello, World!';
console.log(
    'hiThere:',
    typeof hiThere,
    hiThere
);

// Double quotes are also fine
const otherHelloThere = "Hello to the world's people!";
console.log(
    "otherHelloThere:",
    typeof otherHelloThere,
    otherHelloThere
);

// Concatenation... "gluing" strings together
const greeting = 'Hello, ';
const name = 'Shilpa';

const fullGreeting = greeting + name;

console.log(
    "fullGreeting:",
    typeof fullGreeting,
    fullGreeting
);

// String interpolation (use back ticks)
// Back tick strings pay attention to newlines
const otherFullGreeting = `Here is a greeting:
${greeting}${name}!
How nice :)`;

console.log(
    "otherFullGreeting:",
    typeof otherFullGreeting,
    otherFullGreeting
);

console.log(`3 + 3 = ${3 + 3}`);
