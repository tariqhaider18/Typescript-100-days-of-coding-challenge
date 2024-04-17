// Day 1 Question 2: Personal Message: Store a person’s name in a variable and print a message.
var personName = "Tariq"; // This saves the name
console.log("Hello ".concat(personName, ", would you like to learn some Typescript today?")); // This shows the message
// Day 1 Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var name1 = "Tariq";
console.log(name1.toUpperCase());
console.log(name1.toLowerCase());
console.log(name1.charAt(0).toUpperCase() + name1.slice(1).toLowerCase());
