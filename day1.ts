// Day 1 Question 2: Personal Message: Store a person’s name in a variable and print a message.
let personName:string = "Tariq"; // This saves the name

console.log(`Hello ${personName}, would you like to learn some Typescript today?`); // This shows the message

// Day 1 Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let name1:string = "Tariq"

console.log(name1.toUpperCase());
console.log(name1.toLowerCase());
console.log(name1.charAt(0).toUpperCase() + name1.slice(1).toLowerCase());