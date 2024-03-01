

let a = 10;
let b = 0;

let promiseData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(30);
    }, 2000);
})

promiseData.then((data) => {
    b = data
    console.log(a + b); // 40
})



