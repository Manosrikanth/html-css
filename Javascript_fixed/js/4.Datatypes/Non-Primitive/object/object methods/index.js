let emp = {
  ename: "Shubham",
  eid: 1234,
  epassword: "5678",
};
//Object.freeze(emp)
//Object.seal(emp)

console.log(emp);
console.log(Object.keys(emp));
console.log(Object.values(emp));
console.log(Object.entries(emp));
console.log(Object.isFrozen(emp));
console.log(Object.isSealed(emp));

let b = Object.fromEntries(
  Object.entries(emp).filter(([key]) => key !== "epassword"),
);
console.log(b);

let person={
    pname:"Ganesh"

}
function greeting(greet,city){
console.log(`${greet}, I am ${this.pname} and I am from ${city}`);
}
greeting.call(person,"Hi","Mysore")
greeting.apply(person,["Hi","Bengluru"])
const x= greeting.bind(person,"Hi","Tamil nadu")
x()



