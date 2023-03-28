function addToNum(num) {
    console.log('Number before addition:', num); // 35
    num = num + 2; // Update the num.
    console.log('Number after addition:', num); // 37
}

let myNumber = 35;

// PRIMITIVES pass by value

console.log('Number before running function:', myNumber); // 35
// Only the number 35 is passed in, NOT a reference to the original variable
addToNum(myNumber); // We passed the VALUE in (NOT the original)
// myNumber is UNCHANGED! Only the literal number VALUE was passed-in
console.log('Number after running function:', myNumber); // 35

// addToNum(687);
