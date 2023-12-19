// A collection/list of values!
const mySampleArray = [
    'a string!',
    123,
    null,
    undefined,
    12345n,
    true,
    false,
    ['a', 'b', 'c'],
    function () {}
];

console.log('mySampleArray:', typeof mySampleArray, mySampleArray);
console.log(
    'Array.isArray(mySampleArray):',
    Array.isArray(mySampleArray)
);

// Arrays are an indexed list (starting at zero)
const animals = [
    'fish', // 0
    'dog',  // 1
    'cat',  // 2
    'bird'  // 3
];

console.log('animals[2]:', animals[2]);

for(const animal of animals) {
    console.log(` * ${animal}`);
}
