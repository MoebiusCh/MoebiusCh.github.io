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
    cart.item = [...JSON.parse(localStorage.getItem('Cart'))];

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
            var titleProduct = buttonClicked.parentElement.parentElement.querySelector('.item-title').innerText;
            buttonClicked.parentElement.parentElement.remove();
            /* update LocalStorage after remove rows */
            /* should update by use data from cart Item */

            for (let index in cart.item) {
                if (cart.item[index].name == titleProduct) {
                    cart.item.splice(index, 1);
                }
            }
            localStorage.setItem("Cart", JSON.stringify(cart.item));

            localStorage.removeItem("Quantity_" + titleProduct);
            // location.reload();
            updateCost(cart, quantity)
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
            <!--  <button name="decrement">-</button> -->
           <input type="number" style="width:30px" value="${cartItem[i].quantity}" name="quantity">
            <!--  <button name="increment">+</button> -->
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
        itemPrice.innerText = totalCost;
    })
    /* Tính tổng */
    let Sum = document.querySelectorAll('.Total-Price .container p');
    let Tong = 0;
    for (let i in cart.item) {
        Tong += parseFloat(cost[i].innerText);
    }
    console.log(Sum);
    Sum[0].innerHTML = "Tổng Tiền cần thanh toán là: ";
    Sum[0].style.color = "white";
    Sum[0].style.padding = "40px"

    Sum[1].innerHTML = Tong + " Đ";
    Sum[1].style.color = "white";
    Sum[1].style.padding = "40px"

}

