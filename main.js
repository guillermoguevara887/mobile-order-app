import menuArray from "./data.js";

const menu = document.getElementById("main-container");
const checkout = document.getElementById("checkout");
const cambio = document.getElementById("cambio");
let itemArray = [];
let idBtn = 100;




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
        const button = document.createElement("button");
        p.classList.add("p-emoji");
        p1.classList.add("p-name", "p-name-title");
        p2.classList.add("p-name", "p-name-ingredients");
        p3.classList.add("p-name", "p-name-price");
        p.textContent = `${item.emoji}`;
        p1.textContent = `${item.name}`;
        p2.textContent = `${item.ingredients}`;
        p3.textContent = `$ ${item.price}`;
        button.textContent = `Add to cart`;
        button.classList.add("btn");
        button.setAttribute("data-id", `${item.id}`);


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



document.addEventListener("click", function (e) {
    idBtn += 1;
    cambio.classList.remove("inactive");
    cambio.classList.add("active");

    const id = e.target.dataset.id;
    const num = e.target.dataset.num;


    if (id == 0) {
        const arraySecond = [`${menuArray[id].name}`, `${menuArray[id].price}`, `${idBtn}`];
        itemArray.push(arraySecond);


    } else if (id == 1) {
        const arraySecond = [`${menuArray[id].name}`, `${menuArray[id].price}`, `${idBtn}`];
        itemArray.push(arraySecond);



    } else if (id == 2) {
        const arraySecond = [`${menuArray[id].name}`, `${menuArray[id].price}`, `${idBtn}`];
        itemArray.push(arraySecond);


    } else if (num) {
        targetItem(num);
    }


    renderFeed();

})

function targetItem(numId) {
    const index = itemArray.findIndex(item => item[2] == numId);
    itemArray.splice(index, 1);
    renderFeed();

}

function getFeed() {
    let sum = 0;



    let feedhtml = ``;

    itemArray.forEach(item => {
        sum += parseInt(item[1]);




        feedhtml += `
        
        <div class = "feed-item">
            <div class="p-one">
                <p>${item[0]}</p>         
            </div>
            <div class="p-two">
                <button class = "btnRemove " data-num ="${item[2]}">Remove</button>       
            </div>
            <div class="p-three">
                <p>$: ${item[1]} </p>
            
            </div>   

        </div>

        `


    })

    feedhtml += `
    <div class="total">
        <p>Total $: ${sum}</p>
    </div>

    `


    console.log(itemArray);


    return feedhtml;

}

function renderFeed() {
    checkout.innerHTML = getFeed();
}






