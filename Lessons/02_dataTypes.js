"use strict"; // it is a good practice to write this at the top of your js files
// this makes your code more secure and prevents some common errors


// alert(3+3); // As we are using node.js to run this code, alert will not work here
// you can run this code in browser console to see the alert


console.log("This is dataTypes.js file");

// Data Types in JavaScript
// 1. Primitive Data Types
//    a. Number
let name = "Mahar GM"; // String
let age = 21; // Number
let isLoggedIn = false; // Boolean

// number type can be used for both integers and floating point numbers
let price = 99.99; // Floating point number

// numbers => 2^53 -1 (9007199254740991) to -(2^53 -1)
let bigNumber = 1234567890123456789012345678901234567890n; // BigInt
// BigInt is used for very large integers beyond the safe integer limit of Number type

//string type can be created using single quotes, double quotes or backticks (Template Literals) but recommended to use double quotes

// boolean type can have only two values: true or false
// null type represents the intentional absence of any object value
let nullValue = null; // Null
// undefined type represents a variable that has been declared but not assigned a value but null is an assignment value

// undefined is the default value of uninitialized variables
let undefinedValue; // Undefined

//symbol type is used to create unique identifiers for objects
let symbol1 = Symbol("id");
let symbol2 = Symbol("id");
// symbol1 and symbol2 are unique even though they have the same description

// 2. Non-Primitive Data Types
//    a. Object
let person = {
    name: "Mahar GM",
    age: 21,
    isLoggedIn: false,
    address: {
        city: "New York",
        state: "NY"
    }
};
// Objects are used to store collections of data and more complex entities

// Show variables in a readable 3-column table: variable | value | type
console.table([
    { variable: "name", value: name, type: typeof name },
    { variable: "age", value: age, type: typeof age },
    { variable: "isLoggedIn", value: isLoggedIn, type: typeof isLoggedIn },
    { variable: "price", value: price, type: typeof price },
    { variable: "bigNumber", value: bigNumber, type: typeof bigNumber },
    { variable: "nullValue", value: nullValue, type: typeof nullValue },
    { variable: "undefinedValue", value: undefinedValue, type: typeof undefinedValue },
    { variable: "symbol1", value: String(symbol1), type: typeof symbol1 },
    { variable: "person", value: person, type: typeof person }
]); // Displaying variables in a table format on console


// typeof operator is used to find the data type of a variable