// Array:
// Collection of data! List of data!
// Arrays can store any data-type!
// Indexed List / Indexed Array (numbered list.)

const animals = [
    'Giraffe',     // 0
    'Pidgeon',     // 1
    'Tardigrade',  // 2
    'Wolf'         // 3
];

console.log('animals:', typeof animals, animals);
console.log('Is animals an array?', Array.isArray(animals));

// Let's say we want the tardigrade?
console.log('animals[2]:', animals[2]);

// for...of gives us the value of each item in the array.
for(const animal of animals) {
    console.log(` * ${animal}`);
}
