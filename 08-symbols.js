const mySymbol = Symbol('mySymbol');
const mySecondSymbol = Symbol('mySymbol');

console.log(
    'mySymbol:',
    typeof mySymbol,
    mySymbol
);

console.log(
    'mySecondSymbol:',
    typeof mySecondSymbol,
    mySecondSymbol
);

console.log(
    'mySymbol === mySecondSymbol',
    mySymbol === mySecondSymbol
);
