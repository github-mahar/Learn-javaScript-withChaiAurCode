// There are two types of memory in JavaScript
// 1. Stack Memory (Primitive Data Types)
// 2. Heap Memory (Non-Primitive Data Types)
console.log("\n===============================");
console.log("📘 Visual Diagram (Excalidraw):");
console.log("🔗 https://excalidraw.com/#json=P0EhglcpFhEenQR-mQ_dA,RoKgy--nW7YBQfl-FsruTA");
console.log("===============================\n");




// Stack memory is used to store primitive data types and references to objects
// Heap memory is used to store objects and functions and other non-primitive data types

let myName = "Mahar GM"; // Stored in Stack Memory


let myNickname = myName; // Copy of the value is created in Stack Memory
myNickname = "GM"; // Changing myNickname does not affect myName

// console.log("myName:", myName); // "Mahar GM"


// console.log("myNickname:", myNickname); // "GM"


let userOne = {
    name: "Mahar GM",
    age: 21,
    email: "TQD1M@example.com"
}; // Stored in Heap Memory

let userTwo = userOne; // Copy of the reference is created in Stack Memory, both point to the same object in Heap Memory

console.log("userOne.name before:", userOne.name); // "Mahar GM"
console.log("userTwo.name before:", userTwo.name); // "Mahar GM"

userTwo.name = "GM"; // Changing userTwo also affects userOne as both point to the same object

console.log("userOne.name after:", userOne.name); // "GM"
console.log("userTwo.name after:", userTwo.name); // "GM"