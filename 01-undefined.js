console.log(
    'typeof undefined:',
    typeof undefined,    // "undefined"
    undefined            // undefined
);

// When do we see undefined?

let myVariable;

console.log(
    'typeof myVariable:',
    typeof myVariable,    // "undefined"
    myVariable            // undefined
);

console.log(
    'typeof myNonDeclaredVariable:',
    typeof myNonDeclaredVariable        // "undefined"
    // myNonDeclaredVariable            // ERROR
);
