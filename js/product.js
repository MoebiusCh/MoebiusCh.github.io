const quantityProduct = document.querySelector(".quantity .quantity-number");
const decrement = document.querySelector('.quantity [name="decrement"]');
const increment = document.querySelector('.quantity [name="increment"]');
const ButtonAddCart = document.querySelector('[name=addCart]');

let cost = document.querySelector('.price .cost');
let InputQuantityProduct = parseFloat(quantityProduct.value);
let totalQuantityProduct = 0;

const path = location.pathname;
const fileName = path.slice(path.lastIndexOf("/") + 1, path.lastIndexOf(".html"));

const ObjNamingKey = {
    Quantity: "Quantity_",
    Cost: "Cost_"
}
var Cart = {
    item: []
};
/* Get Value from local Storage every times reload page */
window.addEventListener('load', () => {
    getValueFromLocalStorage();
})
function getValueFromLocalStorage() {
    /* lấy value of key Storage */
    const valueOfKeyStorage = localStorage.getItem(ObjNamingKey.Quantity + fileName);
    if (valueOfKeyStorage != undefined) {
        totalQuantityProduct = parseFloat(valueOfKeyStorage);
    } console.log(totalQuantityProduct);

    /* Get cart Item*/
    const cartFromLocalStorage = JSON.parse(localStorage.getItem('Cart'));
    for (let key in cartFromLocalStorage) {
        Cart.item.push(cartFromLocalStorage[key]);
    }

}

quantityProduct.addEventListener('change', () => {
    let choose = "Typing";
    UpdateQuantityProduct(choose);
})
increment.addEventListener('click', () => {
    let choose = 1;
    UpdateQuantityProduct(choose);
})
decrement.addEventListener('click', () => {
    let choose = -1;
    UpdateQuantityProduct(choose);
})
ButtonAddCart.addEventListener('click', () => {
    setLocalStorage();
})

function UpdateQuantityProduct(choose) {
    // InputQuantityProduct = parseFloat(quantityProduct.value);
    if (choose == 1) {
        InputQuantityProduct += 1;
        quantityProduct.value = InputQuantityProduct;
        quantityProduct.setAttribute("value", InputQuantityProduct);
    }
    if (choose == -1) {
        if (InputQuantityProduct == 0) {
            return;
        }
        InputQuantityProduct -= 1;
        quantityProduct.value = InputQuantityProduct;
        quantityProduct.setAttribute("value", InputQuantityProduct);
    } if (choose = "Typing") {
        if (quantityProduct.value < 0) {
            quantityProduct.value = 0;
            quantityProduct.setAttribute("value", 0);
        }
        quantityProduct.setAttribute("value", quantityProduct.value);
        InputQuantityProduct = parseFloat(quantityProduct.value);
    }
}

function setLocalStorage() {
    var ProductDetails = document.querySelector('.product-details');
    var ProductTitle = ProductDetails.querySelector('.title').innerText;
    var ImagePath = ProductDetails.querySelector('.media-image img').src;

    totalQuantityProduct += InputQuantityProduct;

    updateCartItem(ProductTitle, ImagePath);

    console.log('Cart Item: ', Cart.item);
    console.log('TotalQuantity: ', totalQuantityProduct);

    localStorage.setItem(ObjNamingKey.Quantity + fileName, totalQuantityProduct);
    localStorage.setItem(ObjNamingKey.Cost + fileName, cost.innerText);
    localStorage.setItem('Cart', JSON.stringify(Cart.item))
}

function updateCartItem(ProductTitle, ImagePath) {
    var flag = true;

    for (let key in Cart.item) {
        if (Cart.item[key].name == ProductTitle) {
            Cart.item[key].quantity = totalQuantityProduct;
            flag = false;
        }
    }
    if (flag) {
        Cart.item.push({ name: ProductTitle, imgPath: ImagePath, quantity: totalQuantityProduct });
    }
}