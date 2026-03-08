 JavaSript Question & Answer Part:-

1️⃣ What is the difference between var, let, and const?

Ans: Here are the differences between var, let, and const:

var: It is function-scoped. Variables declared with var can be reassigned and redeclared.

let: It is block-scoped. Variables declared with let can be reassigned but not redeclared.

const: It is also block-scoped. Variables declared with const cannot be reassigned or redeclared.

// Example:
var a = 10;
var a = 20; // Allowed

let b = 10;
b = 20; // Allowed
// let b = 30; // Not allowed

const c = 10;
// c = 20 // Not allowed


2️⃣ What is the spread operator (...)?

Ans: The spread operator is used for expanding an array or object. It can be used to copy arrays, merge multiple arrays, and pass array elements as individual arguments to a function.

// Copying array
const number = [10, 20, 30];
const copyNumber = [...number]; // Result: [10, 20, 30]

// Merging array
const fruits = ["apple", "banana"];
const veggies = ["carrot", "potato"];
const groceryList = [...fruits, ...veggies, "milk"]; 
// Result: ["apple", "banana", "carrot", "potato", "milk"]


3️⃣ What is the difference between map(), filter(), and forEach()?

Ans: Here is the difference between map(), filter(), and forEach():

map(): Creates a new array with the results of calling a function on every element. It updates and transforms the elements.

filter(): Selects specific items based on a condition and returns a new array containing only the items that passed the test.

forEach(): Executes a function for every item in an array but does not return anything. It works like a simple loop.

// Example usage:
const nums = [1, 2, 3, 4];

const doubled = nums.map(num => num * 2); // [2, 4, 6, 8]
const evens = nums.filter(num => num % 2 === 0); // [2, 4]
nums.forEach(num => console.log(num)); // logs 1, 2, 3, 4


4️⃣ What is an arrow function?

Ans: An arrow function is a shorter and modern syntax for writing functions in JavaScript (introduced in ES6). It makes the code cleaner and easier to read.

// Traditional Function
function addTraditional(a, b) {
  return a + b;
}

// Arrow Function
const addArrow = (a, b) => a + b;

console.log(addArrow(5, 10)); // Result: 15


5️⃣ What are template literals?

Ans: Template literals are a modern way to handle strings in JavaScript using backticks (`).

Benefits: Easily insert variables using ${}, supports multi-line strings, and provides cleaner syntax.

const name = "Jony";
const age = 22;

// Using Template Literals
const message = `My name is ${name} and I am ${age} years old.`;

console.log(message); 
// Result: My name is Jony and I am 22 years old.
