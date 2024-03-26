// Object:
// Container for data, stored in key-value pairs!
// Objects can store any data-type!
// "Object" that stores key-value pairs goes by names depending on programming language:
// * Hash
// * Map
// * Associative Array

const school = {
    'name': 'Lighthouse Labs',
    'instructor': 'Warren Uhrich',
    'year': 2024,
    'topics': ['HTML', 'CSS', 'JavaScript']
};

console.log('school:', typeof school, school);

const key = 'year';

const yearSyntaxOne = school.year;
const yearSyntaxTwo = school['year'];
const yearSyntaxThree = school[key];

console.log('year from school obj:', yearSyntaxOne, yearSyntaxTwo, yearSyntaxThree);

const student = {
    name: 'Sorren',
    hobbies: {
        personal: 'Sleeping',
        tech: 'Programming',
        outdoors: 'Running'
    }
};

student.school = 'Lighthouse Lab';
student.school = 'Lighthouse Labs';

console.log('student object:', student);

console.log('student.hobbies.tech:', student.hobbies.tech);
console.log('student[\'hobbies\'][\'tech\']:', student['hobbies']['tech']);

console.log('Looping through school object:\r\n');
for(const key in school) {
    const value = school[key];

    console.log(key, '=', value);
}
