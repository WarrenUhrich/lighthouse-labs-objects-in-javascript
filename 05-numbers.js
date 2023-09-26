// In JS all numbers, decimal or whole, are considered: number

// Whole number (integer)
const seven = 7;

// Decimal number (floating point, double)
const PI = 3.14;

console.log(
    'typeof seven',
    typeof seven, // number
    seven         // 7
);

console.log(
    'typeof PI',
    typeof PI, // number
    PI         // 3.14
);

// Utility functions...
const PIAsInt = parseInt(PI); // ?
console.log('PIAsInt:', PIAsInt); // 3
console.log('parseInt(5.9)', parseInt(5.9)); // 5 (no rounding!)

const sevenAsFloat = parseFloat(seven); // 7
console.log('sevenAsFloat:', sevenAsFloat);
console.log('parseFloat("5.5")', parseFloat("5.5")); // 5.5 - useful for strings!

// Watch out in maths...
const sum = 3 + '3'; // If the value on either side of + is a string, concatentation occurs!
console.log(
    'typeof sum',
    typeof sum,   // string
    sum           // "33"
);

const stringToNum = Number('3.5'); // 3.5
const sum2 = 3 + stringToNum;
console.log(
    'typeof sum2',
    typeof sum2,  // number
    sum2          // 6.5
);
