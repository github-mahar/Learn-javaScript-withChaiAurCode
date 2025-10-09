const accountId = 123456;
let accountName = "John Doe";
var accountBalance = 1000.50;
accountCity = "New York"; // Implicit global variable (not recommended)
let accountStatus; // Declared but not initialized, defaults to undefined

// accountId = 654321; // Error: Assignment to constant variable
accountName = "Jane Smith"; // Reassigning a let variable
accountBalance = 500; // Reassigning a var variable
accountCity = "Los Angeles"; // Reassigning the implicit global variable


console.log(accountId); // displaying variable value on console
console.table([accountName, accountBalance, accountCity, accountStatus]); // Displaying variables in a table format on console


// Note: Avoid Using Var and Implicit Globals in Modern JavaScript for Better Code Quality and Maintainability.(because var is function-scoped and can lead to unexpected behaviors, while implicit globals can cause conflicts and are harder to track.)