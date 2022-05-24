const leo = {
    name: 'Leo',
    type: 'gecko'
};

const quorra = {
    name: 'Quorra',
    type: 'dog',
    speak: function () {
        console.log(this.name + ' barks and is ' + this.age + ' years old.');
    }
};

quorra.age = 1;

const pollo = {
    name: 'Pollo',
    type: 'dog',
    speak: function () {
        console.log(this.name + ' barks.');
    }
};

const cassius = {
    name: 'Cassius',
    type: 'child'
};

console.log('leo:', typeof leo, leo);
console.log('quorra:', typeof quorra, quorra);
console.log('pollo:', typeof pollo, pollo);
console.log('cassius:', typeof cassius, cassius);

pollo.speak();
quorra.speak();

console.log(`Hello from ${leo['name']} the ${leo.type}!`);
