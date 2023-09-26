const myTrueVariable = true;
const myFalseVariable = false;

console.log(
    'typeof myTrueVariable:',
    typeof myTrueVariable,    // "boolean"
    myTrueVariable            // true
);

console.log(
    'typeof myFalseVariable:',
    typeof myFalseVariable,    // "boolean"
    myFalseVariable            // false
);

if(3 > 2) {
    console.log('If statement was truthy!');
} else {
    console.log('If statement was falsey!');
}
