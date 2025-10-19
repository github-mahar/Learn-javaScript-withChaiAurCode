const name = "Mahar GM"; // String
const repoCount = 33; // Number

// console.log(name + repoCount + " repositories"); // Concatenation (not recommended way outdated way)

console.log(`${name} ${repoCount} repositories`); // Template Literal (recommended way modern way)


// String Object
const myName = new String("Mahar GM"); // String object (not recommended)
console.log(myName);
console.log(myName[0]); // Accessing first character
console.log(myName.length); // Length of the string

// String Methods
console.log(myName.toUpperCase()); // Convert to Uppercase
console.log(myName.toLowerCase()); // Convert to Lowercase
console.log(myName.includes("GM")); // Check if substring exists
console.log(myName.startsWith("Mahar")); // Check if starts with substring
console.log(myName.charAt(2)); // Character at index 2'))
console.log(myName.indexOf("GM")); // Index of substring


console.log(myName.replace("GM", "G M")); // Replace substring