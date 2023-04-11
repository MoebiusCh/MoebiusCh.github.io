if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
    console.log("Ready");
}
/* Chạy code js sau khi DOMloaded */
function ready() {
    let contentContainer = document.querySelector('.content-section');

    const cart = {
        item: []
    }
    cart.item = [...JSON.parse(localStorage.getItem('Cart'))]
    console.log(cart.item[0])

    /*  Render Element Shopping Cart*/
    RenderElement(cart.item, contentContainer);
    let quantity = document.querySelectorAll('input[name="quantity"]');

    /* Update table data */

    /* mỗi item 1 bảng giá khác nhau */
    updateCost(cart, quantity);
    /* Delete table data */
    let deleteBtn = document.querySelectorAll('.delete');
    deleteBtn.forEach(function (button, keyNumber) {
        button.addEventListener('click', function (event) {

            localStorage.removeItem("Quantity_" + cart.item[keyNumber].name);

            var buttonClicked = event.target;
            buttonClicked.parentElement.parentElement.remove();
            /* update LocalStorage after remove rows */
            /* should update by use data from cart Item */

            cart.item.splice(keyNumber, 1);
            localStorage.setItem("Cart", JSON.stringify(cart.item));
        })
    })
}

function RenderElement(cartItem, contentContainer) {
    let productNeedToRenderList = [];
    for (let i in cartItem) {
        productNeedToRenderList.push(`
            <img src="${cartItem[i].imgPath}"
                class="shop-item-image">
    
            <div class="shop-item-details">
                <h3 class="item-title">${cartItem[i].name}</h3>
            </div>
            <span class="price"></span>
            <span class="quantity-container">
                <button name="decrement">-</button> 
           <input style="width:30px" value="${cartItem[i].quantity}" name="quantity">
                <button name="increment">+</button>
           </span>
           <span class="delete"><img src="./imgs/remove.png" class="remove-icon"></span>`
        )
        let shop_item = document.createElement("div");
        shop_item.classList.add("shop-item");
        shop_item.innerHTML = productNeedToRenderList[i];
        contentContainer.appendChild(shop_item);
    }
}

function updateCost(cart, quantity) {
    let cost = document.querySelectorAll('.shop-item .price');
    cost.forEach(function (itemPrice, keyNumber) {
        let totalCost = parseFloat(cart.item[keyNumber].Price) * parseFloat(quantity[keyNumber].value);
        /* nếu ko có giá trị gì thì nó bằng 0 */
        if (isNaN(totalCost)) {
            itemPrice.innerText = 0;
            return;
        }
        else {
            itemPrice.innerText = totalCost;
        }
    })
}
