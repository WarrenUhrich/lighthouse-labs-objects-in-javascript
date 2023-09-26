let myNullVariable = null; // We're saying this variable is empty on purpose.

console.log(
    'typeof myNullVariable:',
    typeof myNullVariable,    // "object"
    myNullVariable            // null
);

console.log(
    'Is this null?',        
    myNullVariable === null // true
);
