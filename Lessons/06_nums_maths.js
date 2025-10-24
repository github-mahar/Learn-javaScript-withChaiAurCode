const score = 85; // number primitive
console.log("Score:", score);

const balance = new Number(1000);  // creating a number object
console.log("Balance:", balance);

// Using Number methods
console.log(balance.toString().length); // 4

console.log(balance.toFixed(2)); // "1000.00"

console.log(Number.isInteger(score));