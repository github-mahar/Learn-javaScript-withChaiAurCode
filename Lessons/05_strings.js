const name = "Mahar GM"; // String
const repoCount = 33; // Number

// console.log(name + repoCount + " repositories"); // Concatenation (not recommended way outdated way)

console.log(`${name} ${repoCount} repositories`); // Template Literal (recommended way modern way)


// String Object
const myName = new String("Mahar GM"); // String object (not recommended)
console.log(myName);
console.log(myName[0]); // Accessing first character
console.log(myName.length); // Length of the string
