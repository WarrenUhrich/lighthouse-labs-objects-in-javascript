// Can be true or false!
// Used in any case where we want an on/off switch in our code!
// Built-in expressions like conditionals will resolve to true/false

const myTrue = true;
const myFalse = false;

console.log('myTrue:', typeof myTrue, myTrue);
console.log('myFalse:', typeof myFalse, myFalse);

if(3 < 5) {
    console.log('3 < 5!');
}

if('3' == 3) console.log('\'3\' == 3'); // true
if('3' === 3) console.log('\'3\' === 3'); // false
