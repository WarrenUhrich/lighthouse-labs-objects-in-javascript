// There is no true concept of floats/integers in JS.
// We have one multi-purpose data-type: number

const seven = 7;
const pi = 3.14;

console.log('seven:', typeof seven, seven);
console.log('pi:', typeof pi, pi);

const num1 = process.argv[2];
const num2 = process.argv[3];

const result = Number(num1) + Number(num2);
console.log('result:', typeof result, result);

const suspectString = '123,5Hi there!';
const conversionAttempt = Number(suspectString);
console.log('conversionAttempt:', typeof conversionAttempt, conversionAttempt);
