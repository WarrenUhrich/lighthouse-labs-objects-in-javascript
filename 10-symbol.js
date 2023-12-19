// A guaranteed unique value (unique identifier)

const mySymbol = Symbol('abc');
const mySymbol2 = Symbol('abc');

console.log('mySymbol:', typeof mySymbol, mySymbol);
console.log('mySymbol2:', typeof mySymbol2, mySymbol2);

console.log("mySymbol === mySymbol2", mySymbol === mySymbol2);

const exampleObj = {
    [mySymbol]: '123',
    [mySymbol2]: '456',
};
console.log('exampleObj:', exampleObj);

exampleObj[mySymbol];
