let Ajax = new XMLHttpRequest();

Ajax.open("GET", "https://fakestoreapi.com/products");

Ajax.send();

Ajax.onload = () => {

    let data = Ajax.response;

    let finalData = JSON.parse(data);

    let body = document.body;

    let section = document.createElement("section");

    finalData.map((value, index) => {

        section.innerHTML += `
            <div class="card">
                <img src="${value.image}" alt="" height="150px" width="150px">
                <div class="title">${value.title}</div>
                <div class="price">${value.price}</div>
                <div class="rating">${value.rating.rate}</div>
            </div>
        `;

    });

    body.appendChild(section);
};