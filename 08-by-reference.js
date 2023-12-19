// Primitives - Immutable - Passed/Handled by-Value
const myString = 'abc';
// myString += 'def';

const myNewString = '123'; // '123'
let myNewestString = myNewString; // '123'

myNewestString += 'abcdefxyz'; // 'abcdefxyz'
myNewString; // '123'

console.log(
    'myNewString:', myNewString,
    'myNewestString:', myNewestString
);

console.log("'abc' === 'abc':", 'abc' === 'abc'); // true

// Complex Structures - Array - Mutable - Passed/Handled by-Reference
const myArr = [ // pointer/reference
    'JavaScript',
    'Ruby',
    'HTML',
    'CSS'
];

console.log('myArr (before):', myArr);

myArr.push('Python');

console.log('myArr (after):', myArr);

const myArr2 = myArr; // ['JavaScript', 'Ruby', 'HTML', 'CSS', 'Python']

myArr2.push('SQL');
myArr2.push('Julia');

myArr;  // ['JavaScript', 'Ruby', 'HTML', 'CSS', 'Python']
myArr2; // ['JavaScript', 'Ruby', 'HTML', 'CSS', 'Python', 'SQL', 'Julia']

console.log(
    '\r\n',
    'myArr:', myArr,
    '\r\n',
    'myArr2:', myArr2,
    '\r\n'
);

console.log("['a', 'b', 'c'] == ['a', 'b', 'c']:", ['a', 'b', 'c'] == ['a', 'b', 'c']); // ???
console.log("myArr == myArr2:", myArr == myArr2);
