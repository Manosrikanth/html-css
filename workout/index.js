console.log("start");
var a=10
function x(){
    console.log(a);
    var b=20
    function y(){
        var c=30
        console.log(b);
        console.log(c);
        
    }
    return y 
}
x()()
console.log('End')