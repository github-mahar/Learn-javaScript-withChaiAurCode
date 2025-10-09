let score = "100"; // string
let score2 = "100abc"; // string

console.log(typeof score); // string
console.log(typeof score2); // string


// Convert string to number
let valueInNumber = Number(score);
let valueInNumber2 = Number(score2);

console.log(typeof valueInNumber); // number
console.log(typeof valueInNumber2); // number

console.log(valueInNumber); // 100
console.log(valueInNumber2); // NaN (Not a Number) because "100abc" cannot be converted to a valid number