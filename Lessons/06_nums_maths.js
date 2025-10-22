const score = 85; // number primitive
console.log("Score:", score);

const balance = new Number(1000);  // creating a number object
console.log("Balance:", balance);


// Using Number methods

console.log(balance.toString().length);
console.log(balance.toFixed(2)); 
console.log(Number.isInteger(score));
console.log(Number.parseFloat("123.45abc")); // 123.45
console.log(Number.parseInt("123abc")); // 123