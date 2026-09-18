let a=document.getElementById("p1")
a.style.background="Crimson"
a.style.color="White"
console.log(a);


let b=document.getElementsByClassName("spc1")
for(let i=0; i<b.length; i++){
    b[i].style.background ="Yellow"
}
console.log(b);

let c = document.getElementsByTagName("b")
for(let i=0; i<c.length; i++){
    c[i].style.background ="green"
}
console.log(c);

let d = document.querySelector("#p1")
console.log(d);

let e = document.querySelectorAll(".spc1")
console.log(e);  

