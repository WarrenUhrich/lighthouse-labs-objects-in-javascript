// Symbols are unique identifiers
const mySymbol = Symbol('abc');
const mySecondSymbol = Symbol('abc');

console.log(
    'typeof mySymbol',
    typeof mySymbol, // "symbol"
    mySymbol         // Symbol(abc)
);

console.log(
    'typeof mySecondSymbol',
    typeof mySecondSymbol, // "symbol"
    mySecondSymbol         // Symbol(abc)
);

console.log('mySymbol === mySecondSymbol', mySymbol === mySecondSymbol);
