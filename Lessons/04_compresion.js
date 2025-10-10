console.log(2 < 3  );    // true
console.log(2 > 3  );    // false
console.log(2 <= 3 );    // true
console.log(2 >= 3 );    // false
console.log(2 == 3 );    // false
console.log(2 === 3);    // false
console.log(2 != 3 );    // true
console.log(2 !== 3);    // true


console.log(2 == "2" );   // true
console.log(2 === "2");   // false
// == checks for value equality with type coercion
// === checks for both value and type equality without type coercion

console.log(2 != "2" );   // false
console.log(2 !== "2");   // true


console.log( null == 0);    // false
console.log( null > 0 );    // false
console.log( null < 0 );    // false
console.log( null >= 0);    // true


console.log( undefined == 0);    // false
console.log( undefined > 0 );    // false
console.log( undefined < 0 );    // false
console.log( undefined >= 0);    // false