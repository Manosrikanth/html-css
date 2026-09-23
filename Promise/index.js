let job = true;

let pro = new Promise((resolve, reject) => {

    if (job) {
        resolve("I got job");
    }
    else {
        reject("No still not got");
    }

});

pro.then((res) => console.log(res))
   .catch((err) => console.log(err))
   .finally(() => console.log("Result is..."));