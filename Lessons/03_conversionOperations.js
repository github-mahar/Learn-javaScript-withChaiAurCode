let score = "100"; // string
let score2 = "100abc"; // string

console.log("String to Number Conversion Operations");

console.log(typeof score); // string
console.log(typeof score2); // string


// Convert string to number
let valueInNumber = Number(score);
let valueInNumber2 = Number(score2);

console.log(typeof valueInNumber); // number
console.log(typeof valueInNumber2); // number

console.log(valueInNumber); // 100
console.log(valueInNumber2); // NaN (Not a Number) because "100abc" cannot be converted to a valid number
// Note: NaN is a special numeric value that represents an invalid number

console.log("===================================================================");


console.log("null to Number Conversion Operations");

// convert null to number
let nullValue = null;   // null type
console.log(typeof nullValue); // object (this is a known quirk in JavaScript)


let nullToNumber = Number(nullValue);
console.log(typeof nullToNumber); // number
console.log(nullToNumber); // 0

console.log("===================================================================");


console.log("undefined to Number Conversion Operations");

// convert undefined to number
let undefinedValue; // undefined type
console.log(typeof undefinedValue); // undefined    

let undefinedToNumber = Number(undefinedValue);
console.log(typeof undefinedToNumber); // number
console.log(undefinedToNumber); // NaN (Not a Number) because undefined cannot be converted to a valid number


// Note: null converts to 0, while undefined converts to NaN when using Number() function.

console.log("===================================================================");


console.log("Boolean to Number Conversion Operations");

// convert boolean to number
let isLoggedIn = true; // boolean
let isNotLoggedIn = false; // boolean


console.log(typeof isLoggedIn); // boolean
console.log(typeof isNotLoggedIn); // boolean


let trueToNumber = Number(isLoggedIn);
let falseToNumber = Number(isNotLoggedIn);

console.log(typeof trueToNumber); // number
console.log(typeof falseToNumber); // number

console.log(trueToNumber); // 1 (true converts to 1)
console.log(falseToNumber); // 0 (false converts to 0)
// Note: In JavaScript, true converts to 1 and false converts to 0 when using Number() function.

console.log("===================================================================");

