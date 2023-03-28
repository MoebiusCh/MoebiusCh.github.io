let contentContainer = document.querySelector('.content-section');

let quantity = document.querySelector('.quantity');
quantity.innerText = window.localStorage.getItem("Quantity_" + "PHX");

let cost = document.querySelector('.shop-item .price');
console.log(cost)

const product = [
    {
        name: "PHX",
        pathImage: "https://vn.yamaha.com/vi/files/Image-Index_PHX_2000x2000_750428aa6db367e9d50bd5374d14d16d.jpg",
        cost: window.localStorage.getItem("Cost_" + "PHX"),
        deleteBtn: "./imgs/remove.png"
    }
]

cost.innerText = product[0].cost;

const shop_item = document.createElement("div");
shop_item.classList.add("shop-item");
shop_item.innerHTML = `
                <img src="${product[0].pathImage}"
                    class="shop-item-image">

                <div class="shop-item-details">
                    <h3 class="item-title">${product[0].name}</h3>
                </div>
                <span class="price"></span>
                <span class="quantity">1</span>
                <span class="delete"><img src="${product[0].deleteBtn}" alt="" class="remove-icon"></span>`
const PHX = contentContainer.append(shop_item);
