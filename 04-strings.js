// Single quotes can be used to begin or terminate a string.
const hiThere = 'Hello, World!';
console.log('hiThere:', typeof hiThere, hiThere);

const letsGoString = 'Let\'s go!\n\tNew-line/tabbed text.';
console.log('letsGoString:', typeof letsGoString, letsGoString);

// Double quotes are just as valid!
const letsGo2 = "Let's go! Warren says, \"Hi there!\"";
console.log('letsGo2:', typeof letsGo2, letsGo2);

const myBackTickString = `Let's go! Warren says, "Hi!"
Look at all of these...


    tabbed
    new
    lines!
`;
console.log('myBackTickString:', typeof myBackTickString, myBackTickString);

// Glue strings together; concatenation!
const myConcatenatedString = hiThere + ' ' + letsGoString;
console.log('myConcatenatedString:', typeof myConcatenatedString, myConcatenatedString);

// Interpolation... values inserted within strings.
const myInterpolatedString = `Hi there! Here is an
interpolated string: ${5 + 5}

Let's say hello... ${hiThere} <-- That was the hiThere var!

Now the string is done.`;
console.log('myInterpolatedString:', typeof myInterpolatedString, myInterpolatedString);
