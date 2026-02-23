//push:Adds element to the end of array.
let arr = [1, 2];
arr.push(3);
console.log(arr)

//pop:Removes element from the end.
let arr1 = [1,2,3,4,5];
arr1.pop();
console.log(arr1);

//shift:Removes element from the beginning.
let arr2 = [1,2,3,4,5];
arr2.shift();
console.log(arr2);

//unshift:Adds element to the beginning.
let arr3 = [1,2,3,4,5];
arr3.unshift(100);
console.log(arr3);

//concat:Joins arrays to create a new array.
let a = [1, 2];
let b = [3, 4];

let result = a.concat(b);
console.log(result);

//Join:Joins all elements of an array into a string.
let arr4 = ["Hello", "World"];
console.log(arr4.join(" "));

//Map:Transforms each element and returns new array.
const arr5 =[1,2,3,4,5,6];
const doubled=arr5.map(num =>num*2);
console.log(doubled);

//filter:Selects elements based on condition.
const arr6 =[1,2,3,4,5,6];
const doubled1 = arr6.filter(num => num>2);
console.log(doubled1);

//reduce:Reduces array to single value.
const arr7 = [1,2,3,4,5,6];
const sum = arr7.reduce((sum,num)=>sum+num,0);
console.log(sum);

//forEach:Loops through array (no return).
const arr8 = [1,2,3,4,5,6];
arr8.forEach(num => 
{
  console.log(num);
});

//sort():sorts elements
const arr9 = [5,2,6,4,1,3];
arr9.sort();
console.log(arr9);

//reverse():Reverses array order.
const arr10 = [1,2,3,4,5,6];
arr10.reverse();
console.log(arr10);