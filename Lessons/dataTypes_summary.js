// 1. Primitive Data Types (7 types)
//    a. Number
//    b. String
//    c. Boolean
//    d. null
//    e. undefined
//    f. Symbol
//    g. BigInt

let num = 42; // Number
let str = "Hello, World!"; // String
let bool = true; // Boolean
let nullVar = null; // Null
let undef; // Undefined
let sym = Symbol("unique"); // Symbol
let sym2 = Symbol("unique");
let bigIntNum = 1234567890123456789012345678901234567890n; // BigInt
console.log(sym === sym2); // false, symbols are unique

// 2. Non-Primitive (Reference) Data Types
//    a. Object
//       i. Array
//       ii. Function

let obj = { name: "Alice", age: 30 }; // Object
let arr = [1, 2, 3, 4, 5]; // Array
let func = function() { return "Hello!"; }; // Function

// Displaying variables in a table format on console    
console.table([
    { variable: "num", value: num, type: typeof num },
    { variable: "str", value: str, type: typeof str },
    { variable: "bool", value: bool, type: typeof bool },
    { variable: "nullVar", value: nullVar, type: typeof nullVar },
    { variable: "undef", value: undef, type: typeof undef },
    { variable: "sym", value: String(sym), type: typeof sym },
    { variable: "bigIntNum", value: bigIntNum, type: typeof bigIntNum },
    { variable: "obj", value: obj, type: typeof obj },
    { variable: "arr", value: arr, type: typeof arr },
    { variable: "func", value: func, type: typeof func }
])