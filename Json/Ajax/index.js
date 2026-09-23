function load() {
    let ajax = new XMLHttpRequest();

    ajax.open("GET", "./index.txt");

    ajax.send();

    ajax.onload = () => {
        let p1 = document.getElementById("p1");
        p1.innerText = ajax.response;
    };
}