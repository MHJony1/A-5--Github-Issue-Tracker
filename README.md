1️⃣ What is the difference between var, let, and const?
Ans: Here the difference var , let & const

1. var:- var is a function-scoped. Variables declared with var can be reassigned and redeclared.
2. let:- let is block-scoped. Variables declared with let can be reassigned but not redeclared.
3. const:- const is also block-scoped. Variables declared with let can not be reassigned amd redeclared.

Example:-
var a = 10;
var a = 20; // allowed

let b = 10;
b = 20; // allowed
// let b = 30; // not allowed

const c = 10;
// c = 20 // not allowed

2️⃣ What is the spread operator (...)?

Ans: The spread operator is used for expanding an array or object. Also, the spread operator can be used to copy arrays, merge multiple arrays, and pass array elements as individual arguments to a function.

Example:
//copying array
const number = [10,20,30];
const copyNumber =[...number];
//Result: [10,20,30]

//merge array
const fruits = ["apple", "banana"];
const veggies = ["carrot", "potato"];

const groceryList = [...fruits, ...veggies, "milk"];
// Result: ["apple", "banana", "carrot", "potato", "milk"]

3️⃣ What is the difference between map(), filter(), and forEach()?
Ans: Here the difference between map(), filter() and forEach():-

1.map():- Creates a new array with the results of calling a function on every element. It's also updated and transformed the element.

Example:
const numbers = [10,20,30];
const doubled =numbers.map(num => num*2);
console.log(doubled); //result: [20,40,60];

2.filter():- It selects specific items based on a condition and gets a new array containing only the items that passed the test.

Example:
const numbers = [1, 2, 3, 4];
const evens = numbers.filter(num => num % 2 === 0); 
console.log(evens); //result: [2, 4]

3.forEach():- It executes a function for every item in an array or element. It does not value or element returns. It works like a loop.

Example:
const numbers = [1,2,3];
numbers.forEach(num => {
  console.log(num);
}); // result; 1,2,3

4️⃣ What is an arrow function?

Ans: An arrow function is a shorter syntax for writing functions in JavaScript. It's a modern JavaScript (ES6) item. Arrow functions make code shorter, cleaner, and easier to read.

Example:
const add = (a, b) => {
  return (a + b);
};

5️⃣ What are template literals?

Ans: Template literals are a modern way to handle strings in JavaScript. Here uses of bactics(` `). Its benfits Insert variables easily, Multi-line strings, Cleaner syntax.

Example:
const name = "Jony";
const age = 22;
const message = `My name is ${name}, and I am ${age} years old.`;
console.log(message);
//result: My name is Jony, and I am 22 years old.

 
