//let:values can change
let age = 20;
age = 25;   // allowed
console.log(age); 

//const:cannot reassign values
const pi = 3.14;
console.log(pi);

//Arrow Functions (=>):Shorter way to write functions.
const add = (a, b) => a + b;
console.log(add(2, 3));

//Template Literals:Use backticks ` and ${} for variables.
const name = "Sravanthi";
const age1 = 22;

console.log(`Iam ${name}, am ${age1} years old.`);

//Destructuring 2 types
//Array Destructuring:extracting values from an array and assigning them to variables in a simple way.
const numbers = [10, 20, 30];
const [a, b, c] = numbers;
console.log(a);
console.log(b);
console.log(c); 
//console.log(a,b,c);

//Object Destructuring:
const person = {
  name1: "Sravanthi",
  age: 22
};
const { name1, age2 } = person;
console.log(name1); 

//Spread Operator (...):Used to copy or merge arrays/objects.
//copy an array:
const array1 = [1, 2, 3];
const array2 = [...array1];
console.log(array2);

//Merge Arrays:
const d = [1, 2];
const e = [3, 4];
const result = [...d, ...e];
console.log(result);

//Add New Elements:
const number = [2, 3, 4];
const updated = [1, ...number, 100];
console.log(updated);

//Spread with Objects
const person1 = { name: "Sravanthi" };
const updatedPerson = { ...person1, age: 22 };
console.log(updatedPerson);