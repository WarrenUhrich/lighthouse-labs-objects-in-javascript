// Objects are composed of key-value pairs
// sometimes called Map, Hash, Associative Array
const pickel = {
    name: 'Pickel',
    type: 'cat'
};

// JSON syntax - JavaScript Object Notation
const pickelInJSONSyntax = {
    "name": "Pickel",
    "type": "cat"
};

console.log(
    'pickel:',
    typeof pickel,
    pickel
);

console.log(
    'pickelInJSONSyntax:',
    typeof pickelInJSONSyntax,
    pickelInJSONSyntax
);

const chico = {
    name: 'Chico',
    type: 'dog',
    // When we store a function in an object,
    // instead of "property" we often call them
    // methods. Method = function in an object.
    speak: function() {
        console.log(`${chico.name} barks and is a ${chico.type}.`);
    }
};

console.log('chico.name', chico.name);

chico.speak();

const quorra = {
    name: 'Quorra',
    type: 'dog',
    // When we store a function in an object,
    // instead of "property" we often call them
    // methods. Method = function in an object.
    speak: function() {
        console.log(`${this.name} barks and is a ${this.type}.`);
    }
};

quorra.speak();

// Dot syntax for retrieving value by key
console.log('quorra.type', quorra.type); // literal string value for key
const nameKey = 'name';
console.log('quorra[nameKey]', quorra[nameKey]); // square bracket, we can pass in variables or more complex strings

// function dog(name, type) {
//     this.name = 'Quorra';
//     this.type = 'dog';
//     this.speak = function() {
//         console.log(`${this.name} is a ${this.type}!`);
//     }
//     return this;
// };
// console.log('Quorra2point0 says...');
// const quorra2point0 = dog();
// console.log(quorra2point0);
// quorra2point0.speak();
