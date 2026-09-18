function dark(){
    document.body.style.background="black"
    document.body.style.color="white"
}

function light(){
    document.body.style.background="white"
    document.body.style.color="black"
}

function fo(x){
    x.style.background="yellow"
}

function b1(){
    let input = document.getElementById("ip1")
    input.value = input.value.toUpperCase()
    console.log(input);
}