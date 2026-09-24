let a = Promise.resolve("success");
console.log(a);

let b = Promise.reject("Failed");
console.log(b);

let P1 = Promise.resolve("Pass1");
let P2 = Promise.resolve("Pass2");
let P3 = Promise.reject("Fail1");

let P4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Pass4");
    }, 3000);
});

Promise.all([P1, P2])
    .then((res) => console.log(res));

Promise.allSettled([P1, P2, P3])
    .then((res) => console.log(res));

Promise.any([P2, P3])
    .then((res) => console.log(res));

Promise.race([P4, P2])
    .then((res) => console.log(res));