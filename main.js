import menuArray from "./data.js";

const menu = document.getElementById("main-container");

function renderMenu() {
    menuArray.forEach(item => {
        const menuContainer = document.createElement("div");
        menuContainer.classList.add("menu-container");
        const menuItem = document.createElement("div");
        const menuItem1 = document.createElement("div");
        const menuItem3 = document.createElement("div");
        menuItem.classList.add("menu-item");
        menuItem1.classList.add("menu-item1");
        menuItem3.classList.add("menu-item3");
        let p = document.createElement("p");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        let button = document.createElement("button");
        p.classList.add("p-emoji");
        p1.classList.add("p-name");
        p.textContent = `${item.emoji}`;
        p1.textContent = `${item.name}`;
        p2.textContent = `${item.ingredients}`;
        p3.textContent = `$ ${item.price}`;
        button.textContent = `Add to cart`;
        button.classList.add("button");

        menuItem.appendChild(p);
        menuItem1.appendChild(p1);
        menuItem1.appendChild(p2);
        menuItem1.appendChild(p3);
        menuItem3.appendChild(button);

        menuContainer.appendChild(menuItem); // Agrega los elementos al contenedor
        menuContainer.appendChild(menuItem1);
        menuContainer.appendChild(menuItem3);

        menu.appendChild(menuContainer);
    });
}

renderMenu();