let dark = document.getElementById("dark");

dark.addEventListener("click", () => {
    document.body.style.background = "black";
    document.body.style.color = "white";
});

let light = document.getElementById("light");

light.addEventListener("dblclick", () => {
    document.body.style.background = "white";
    document.body.style.color = "black";
});