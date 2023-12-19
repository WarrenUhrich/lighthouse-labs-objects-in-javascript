const myTrue = true;
const myFalse = false;

console.log(
    'typeof myTrue:', typeof myTrue,
    'typeof myFalse:', typeof myFalse,
    '\r\n',
    'myTrue:', myTrue,
    'myFalse:', myFalse,
);

if(3 > 5) {
    console.log('3 is greater!');
} else {
    console.log('3 is NOT greater!');
}

// Watch out for strict equality! The data-type must be the same.
if('3' === 3) console.log('3 is equal to 3');
