import menuArray from "./data.js";

const menu = document.getElementById("main-container");
const checkout = document.getElementById("checkout");
const cambio = document.getElementById("cambio");
const payTotal = document.getElementById("payTotal");
const screen = document.getElementById('screen');
const idForm = document.getElementById('id-form');
const name = document.getElementById('name');
const screenPay = document.getElementById('screen-pay');
const screenPayMain = document.getElementById('screen-pay-main');
const payPay = document.getElementById('pay-pay');
console.log(name.value);


let tipp = 0;

let itemArray = [];
let idBtn = 100;


idForm.addEventListener('submit', function (event) {
    event.preventDefault();

    screen.style.display = 'none';
    screenPay.style.display = 'inline';
    renderPay();

})

document.querySelector('#exit').addEventListener('click', function () {
    location.reload();
});



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
    let actElem = 0;
    idBtn += 1;
    cambio.classList.remove("inactive");
    cambio.classList.add("active");
    const id = e.target.dataset.id;
    const num = e.target.dataset.num;
    const tip = e.target.dataset.tip;
    const x = e.target.dataset.click;



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
    } else if (e.target.dataset.btn == 9999) {
        screen.style.display = 'inline';
    } else if (tip) {
        if (actElem == 0) {
            tipp = parseFloat(tip);
            actElem = 1;
        }
    } else if (x) {
        screen.style.display = 'none';
        console.log(x)
    }



    renderFeed();

})

function targetItem(numId) {
    const index = itemArray.findIndex(item => item[2] == numId);
    itemArray.splice(index, 1);
    tipp = 0;
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
                <p>$ ${item[1]} </p>
            
            </div>   

        </div>

        `

    })

    feedhtml += `
    <div class="tip-add">
    <button class ="btn-tip" data-tip= " ${(sum * .10).toFixed(2)}">Tip 5%: <br>$ ${(sum * .10).toFixed(2)}</button>
    <button class ="btn-tip" data-tip= " ${(sum * .12).toFixed(2)}">Tip 12%: <br>$ ${(sum * .12).toFixed(2)}</button>
    <button class ="btn-tip" data-tip= "${(sum * .18).toFixed(2)}">Tip 18%: <br>$ ${(sum * .18).toFixed(2)}</button>

    </div>

    `


    let sumTip = sum + tipp;

    feedhtml += `
    <div class="total">
        <p>Total: $ ${sumTip}</p>
    </div>
    <div class="btnCheckout">
        <button class="btn-check" data-btn = "${9999}">Checkout</button>
    </div>

`

    renderTotal(sumTip);


    return feedhtml

}

function renderFeed() {
    checkout.innerHTML = getFeed();
}




function renderTotal(sum) {
    payTotal.innerHTML = '';
    let pTotal = document.createElement('p');
    pTotal.textContent = `The Total is: $ ${sum} `;
    payTotal.appendChild(pTotal);
}

function renderPay() {


    payPay.textContent = `Thanks ${name.value}!! your order is on its way!!`;
    console.log(payPay);
    return payPay;

}

function renderPayF() {
    screenPayMain.innerHTML = renderPay();
}









