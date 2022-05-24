const myArray = [null, undefined, 'My string!', 56, 7n];
console.log('myArray:', typeof myArray, myArray);

console.log('myArray[2]:', typeof myArray[2], myArray[2]);

myArray.push('Other string!');
myArray[2] = 'Test123';
console.log('myArray AFTER a .push():', typeof myArray, myArray);

console.log('Our for loop is starting...');
// Set an iterator;  Termination condition; Iteration.
for (let i = 0; i < myArray.length; i = i + 1) {
    console.log('Array Item at Index ' + i, myArray[i]);
}

// for...of
// Array.forEach()
