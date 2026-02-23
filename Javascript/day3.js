//printing structure in js
console.log("Hellooo"); 

// Even and Odd
let a =11
if(a%2==0)
console.log(a + " is even");
else
    console.log(a + " is odd");

//Arrow Function
const greet=()=>console.log("Hello Good Morning") 
greet();

// addition of numbers
const add =(a,b) =>a+b;
console.log(add(4,2));

//add and multipilcation
const add1 = (a,b)=>
    {
        const result=a*b;
        return result;
    };
    console.log(add1(5,6)); 

//rest parameter   (..args)
const small=(...nums)=>
    {
        return nums.reduce((t,n)=>t+n,0);
    };
 console.log(small(10,20,30,70));    
 
 //spread operator
 const number=[1,2,3,4,5];
 const maxvalue=(...nums)=>Math.max(...nums);
 console.log(maxvalue(...number));

 //higher order function
 const arr=[1,2,3,4,5,6];
 const doubled=arr.map(num   =>num**2);
 console.log(doubled);