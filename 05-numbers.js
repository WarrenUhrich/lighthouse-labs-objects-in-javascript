// In JS all numbers, whether decimal or whole, are considered: Number

// Whole number
const seven = 7;

// Decimal number
const pi = 3.14;

console.log(
    'typeof seven:', typeof seven,
    'typeof pi:', typeof pi,
    '\r\n',
    'seven:', seven,
    'pi:', pi,
);

// Utility functions...
const piAsInt = parseInt(pi);
console.log('piAsInt:', piAsInt);
console.log('parseInt("5.9"):', parseInt("5.9"));

// Number constructor function
const numAsString = '5.67';
const numAsNum = Number(numAsString); // parseFloat(numAsString);
console.log(
    'numAsString:', numAsString,
    '\r\n',
    'numAsNum:', numAsNum,
    '\r\n',
    'String(numAsNum):', String(numAsNum)
);

console.log('Number("-54")', Number("-54"));

// Watch out for the addition operator... it turns into concatenation if either operand is a string.
const userInput = '3';
const sum = Number(userInput + 3); // Turns '33' into 33
console.log('sum:', sum);
