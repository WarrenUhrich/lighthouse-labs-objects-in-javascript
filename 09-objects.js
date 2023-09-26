// Objects are composed of key-value pairs
// Map, Hash, Associative Array

const school = {
    'name': 'Lighthouse Labs',
    'topic': 'Web Development',
    'instructor': 'Warren Uhrich',
    'current year': 2023,
    'subtopics': ['HTML', 'JS', 'React', 'PostgreSQL']
};

console.log(
    'typeof school',
    typeof school,
    school
);

console.log('school.name', school.name); // dot syntax looks for a key of this name

console.log('school["current year"]', school["current year"]); // square brackets we can pass in a string/variable to match with keys with spaces

const myKey = 'topic';
console.log('school[myKey]', school[myKey]);

school.currentCohort = 'September 18, 2023 (Day)';
console.log(school);

const fullDate = '2023-09-26';
school.fullDate = fullDate;

const dog = {
    name: 'Quorra',
    age: 2,
    speak: function() { // We can even store functions in objects! "methods"
        console.log('Bark!');
    },
    introduction: function() {
        console.log(`Hi! I'm ${this.name}, and I am ${this.age} years old.`);
        this.speak();    
    }
};

dog.introduction();

console.log(dog.speak);

// dog.speak();
