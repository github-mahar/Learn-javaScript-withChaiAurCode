const name = "Mahar GM"; // String
const repoCount = 33; // Number

// console.log(name + repoCount + " repositories"); // Concatenation (not recommended way outdated way)

// console.log(`${name} ${repoCount} repositories`); // Template Literal (recommended way modern way)


// String Object
const myName = new String("Mahar GM"); // String object (not recommended)
// console.log(myName);
// console.log(myName[0]); // Accessing first character
// console.log(myName.length); // Length of the string

// // String Methods
// console.log(myName.toUpperCase()); // Convert to Uppercase
// console.log(myName.toLowerCase()); // Convert to Lowercase
// console.log(myName.includes("GM")); // Check if substring exists
// console.log(myName.startsWith("Mahar")); // Check if starts with substring
// console.log(myName.charAt(2)); // Character at index 2'))
// console.log(myName.indexOf("GM")); // Index of substring


console.log(myName.replace("GM", "G M")); // Replace substring


const newString = myName.substring(0, 5); // Substring from index 0 to 5
// console.log(newString); // Output: Mahar
// the substring method extracts characters from index 0 to 5 (not including 5)




//Slice method
const slicedString = myName.slice(0, 5); // Slice from index 0 to 5
console.log(slicedString); // Output: Mahar
// the slice method also extracts characters from index 0 to 5 (not including 5)
// but it can also accept negative indices to count from the end of the string

const negativeSlice = myName.slice(-2); // Slice last 2 characters
console.log(negativeSlice); // Output: GM
// here, -2 means start from the second last character to the end of the string





// Trim method
const stringWithSpaces = "   Hello World!   ";
console.log(`'${stringWithSpaces}'`); // Output: '   Hello World!   '
const trimmedString = stringWithSpaces.trim();
console.log(`'${trimmedString}'`); // Output: 'Hello World!'





// replace method with regex
const text = "Hello World! Welcome to the World of JavaScript.";
const newText = text.replace(/World/g, "Universe");
console.log(newText); // Output: Hello Universe! Welcome to the Universe of JavaScript.
// here, /World/g is a regular expression that matches all occurrences of "World"




//includes method
const phrase = "The quick brown fox jumps over the lazy dog.";
console.log(phrase.includes("fox")); // Output: true
console.log(phrase.includes("cat")); // Output: false
// the includes method checks if the substring exists in the string and returns a boolean value





// split method
const csvData = "name,age,city,country";
const dataArray = csvData.split(",");
console.log(dataArray); // Output: [ 'name', 'age', 'city', 'country' ]
// the split method splits the string into an array of substrings based on the specified delimiter (in this case, a comma)