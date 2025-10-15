const name = "Mahar GM"; // String
const repoCount = 33; // Number

// console.log(name + repoCount + " repositories"); // Concatenation (not recommended way outdated way)

console.log(`${name} ${repoCount} repositories`); // Template Literal (recommended way modern way)


// String Object
const myName = new String("Mahar GM"); // String object (not recommended)
console.log(myName);
console.log(myName[0]); // Accessing first character
console.log(myName.length); // Length of the string
console.log(myName.toUpperCase()); // Convert to uppercase
console.log(myName.toLowerCase()); // Convert to lowercase
console.log(myName.charAt(0)); // Accessing first character using charAt method
console.log(myName.indexOf("GM")); // Finding index of substring
console.log(myName.lastIndexOf("a")); // Finding last index of substring
console.log(myName.includes("Mahar")); // Checking if substring is present