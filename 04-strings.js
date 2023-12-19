// Can store information (text-based data!)
const hi = 'Hello, to our Class\' Lecture! Say "Hello!"'; // Single Quotes
const bye = "Goodbye, to our Class' Lecture! Say \"Goodbye!\""; // Double Quotes

console.log(
    'typeof hi:', typeof hi,
    'typeof bye:', typeof bye,
    '\r\n',
    'hi:', hi,
    'bye:', bye
);

// Concatenation -> gluing strings together!
const greeting = 'Hello, ';
const name = 'Monica';

const newPhrase = greeting + name + '.';
console.log('newPhrase:', newPhrase);

console.log(1 + '1'); // Watch out, if EITHER side is a string, it is concatenation!

// String template literal
const myFirstStringTemplateLiteral = `Hello, World!

    Woah!
Look
            at

    this!

`;

console.log(
    'typeof myFirstStringTemplateLiteral:', typeof myFirstStringTemplateLiteral,
    '\r\n',
    'myFirstStringTemplateLiteral:', myFirstStringTemplateLiteral
);

// String Interpolation -> We can inject strings right inside of our string template!
const name1 = 'Jack';
const name2 = 'Kevin';
const name3 = 'Lance';

const listOfNames = `
List of names:
==============
 * ${name1 + '!'}
 * ${name2}
 * ${name3}
`;

console.log(
    'typeof listOfNames:', typeof listOfNames,
    '\r\n',
    'listOfNames:', listOfNames
);



const myVar = '123'; // You can NEVER re-assign myVar
// myVar = ''; // If you need to re-assign, use "let" instead!
