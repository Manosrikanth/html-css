async function x() {
    let data = await fetch("https://fakestoreapi.com/products");

    let finalData = await data.json();

    let body = document.body;

    let section = document.createElement("section");

    finalData.map((value, index) => {
        section.innerHTML += `
            <div class="card">
                <img src="${value.image}" height="200px" width="200px" alt="">
                <div class="title">${value.title}</div>
                <div class="price">${value.price}</div>
            </div>
        `;
    });

    body.appendChild(section);
}

x();