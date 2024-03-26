// We want to say hello to someone.

const name = process.argv[2];
let greetingText = null;

if(name) {
    greetingText = 'Hello, ' + name;
}

if(greetingText !== null) {
    console.log(greetingText);
} else {
    console.log('Error: name is not defined. Please enter a name.');
}
