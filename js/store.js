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

    /* danh sách sản phẩm, có thể nâng cấp sang json về sau :3 */
    /*  const productList = [
         {
             name: "PHX",
             pathImage: "https://vn.yamaha.com/vi/files/Image-Index_PHX_2000x2000_750428aa6db367e9d50bd5374d14d16d.jpg",
             cost: window.localStorage.getItem("Cost_" + "PHX"),
             QuantityPath: "Quantity_" + "PHX",
             pricePath: "Cost_" + "PHX",
             deleteBtn: "./imgs/remove.png"
         },
         {
             name: "LiveCustom",
             pathImage: "https://vn.yamaha.com/vi/files/Image-index_LCHO_1080x1080_a3100d4325c71e1ac9d837f1aa87b203.jpg",
             cost: window.localStorage.getItem("Cost_" + "LiveCustom"),
             QuantityPath: "Quantity_" + "LiveCustom",
             pricePath: "Cost_" + "LiveCustom",
             deleteBtn: "./imgs/remove.png"
         },
         {
             name: "RecordingCustom",
             pathImage: "https://vn.yamaha.com/vi/files/Image-Index_Recording-Custom_2000x2000_337a85395a5405d4dff3d30c4e46c52b.jpg",
             cost: window.localStorage.getItem("Cost_" + "RecordingCustom"),
             QuantityPath: "Quantity_RecordingCustom",
             pricePath: "Cost_" + "RecordingCustom",
             deleteBtn: "./imgs/remove.png"
         }
     ]; */
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
            var buttonClicked = event.target;
            buttonClicked.parentElement.parentElement.remove();
            /* update LocalStorage after remove rows */
            /* should update use data from cart Item */

            console.log("Quantity_" + cart.item[keyNumber].name);
            localStorage.removeItem("Quantity_" + cart.item[keyNumber].name);
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
