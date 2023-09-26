const myString = 'abc';
const arr1 /* Array#1 */ = [1, 2, 3, 4, 5];
const arr2 /* Array#2 */ = [1, 2, 3, 4, 5];

arr1.push(6);

console.log(
    'arr1 === arr2',
    arr1 === arr2 // false
);


const myArray1 = ['a', 'b', 'c'];
const myArray2 = myArray1;

myArray2.push('d');

console.log(
    'myArray1 === myArray2',
    myArray1 === myArray2,
    myArray1,
    myArray2
);

