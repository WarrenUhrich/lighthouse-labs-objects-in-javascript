// Array, indexed array or a list
const myArray = [
    null,         // 0
    undefined,    // 1
    'My string!', // 2
    13,           // 3
    BigInt(305),  // 4
    false         // 5
];

console.log(
    'myArray:',
    typeof myArray,
    myArray
);

console.log(
    'myArray string value:',
    myArray[2]
);

console.log('myArray contains:');
// C-style for loop
// Assignment; Comparison; Iteration
// Initialization; Termination Condition; Value Change
for(let i = 0; i < myArray.length; i = i + 1) {
    console.log('\t* ' + myArray[i])
}

// for...of
// Array.prototype.forEach()
