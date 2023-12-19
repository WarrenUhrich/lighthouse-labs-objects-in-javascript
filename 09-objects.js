// Object are a list of key-value pairs!
// Map, hash, associative array!

const school = {
    'name': 'Lighthouse Labs',
    'topic': 'Web Development',
    'instructor': 'Warren Uhrich',
    'year': 2023,
    'subtopics': ['HTML', 'CSS', 'JavaScript'],
    'sayHello': function() { console.log('Hello!'); }
};

console.log('school:', typeof school, school);
console.log('school.name:', school.name);

school.sayHello();
school.sayHello();


console.log("school['year']:", school['year']);

const myKey = 'topic';
console.log("school[myKey]:", school[myKey]);

console.log('school (before):', typeof school, school);

school.year = 2024;
school.instructor = 'Bryan Gomes';

console.log('school (after):', typeof school, school);

console.log("school.subtopics[2]:", school.subtopics[2]);

console.log('SCHOOL OBJECT:');
for(const key in school) {
    const value = school[key];
    console.log('* ', key, value);
}
