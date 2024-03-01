
// Syncronous
// console.log("First");
// console.log("Second");
// console.log("Third");


// Asyncronous way
console.log("Stat Here");

setTimeout(()=>{
   console.log("Logic Exec...");
},3000)

console.log("Complete exec..");


// Drwabck of asynch....
let a = 10;
let b = 0;

setTimeout(() => {
   b = 50;
}, 2000);

console.log(a+b); // 10
