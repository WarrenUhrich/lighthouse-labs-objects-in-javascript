// Primitives are considered IMMUTABLE.
const myString = 'abc';
// myString = myString + 'd';

let myNewString = 'Hello, World!';
let myNewerString = myNewString;

myNewString = 'Goodbye, World!';
console.log('myNewString:', myNewString);     // Goodbye, World!
console.log('myNewerString:', myNewerString); // Hello, World! or Goodbye World!

console.log("'hello' === 'hello':", 'hello' === 'hello'); // true

/**
 * By-Reference!
 * Complex data structures require very variable memory, and are more
 * taxing to copy/update.
 */

const programmingLangs = [
    'JavaScript',
    'Python',
    'Ruby',
    'PHP'
];

// programmingLangs = []; // Will cause an error because const.

console.log('programmingLangs (before push):', programmingLangs);

programmingLangs.push('Go');

console.log('programmingLangs (after push):', programmingLangs);

// ???
const otherProgrammingLangs = programmingLangs;

otherProgrammingLangs.push('C#');

console.log('programmingLangs:', programmingLangs); // [] -> no C#!
console.log('otherProgrammingLangs:', otherProgrammingLangs); // [] - yes C#! - no Go!

console.log('programmingLangs === otherProgrammingLangs:', programmingLangs === otherProgrammingLangs);

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
console.log('arr1  === arr2', arr1  === arr2);
