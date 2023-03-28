const quantityProduct = document.querySelector(".quantity .quantity-number");
const decrement = document.querySelector('.quantity [name="decrement"]');
const increment = document.querySelector('.quantity [name="increment"]');
const ButtonAddCart = document.querySelector('[name=addCart]');

let cost = document.querySelector('.price .cost');
let InputQuantityProduct = parseFloat(quantityProduct.value);
let totalQuantityProduct = 0;

const path = location.pathname;
const fileName = path.slice(path.lastIndexOf("/") + 1, path.lastIndexOf("."));

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
/* Get Value every times reload page */
window.addEventListener('load', () => {
    getValueFromLocalStorage();
})
function getValueFromLocalStorage() {
    const valueOfKeyStorage = window.localStorage.getItem("Quantity" + fileName);
    if (valueOfKeyStorage != undefined) {
        totalQuantityProduct = parseFloat(valueOfKeyStorage);
    } console.log(totalQuantityProduct);
}

function UpdateQuantityProduct(choose) {
    // InputQuantityProduct = parseFloat(quantityProduct.value);
    if (choose == 1) {
        InputQuantityProduct += 1;
        quantityProduct.value = InputQuantityProduct;
        quantityProduct.setAttribute("value", InputQuantityProduct);
    } else if (choose == -1) {
        if (InputQuantityProduct == 0) {
            return;
        }
        InputQuantityProduct -= 1;
        quantityProduct.value = InputQuantityProduct;
        quantityProduct.setAttribute("value", InputQuantityProduct);
    } else if (choose = "Typing") {
        if (quantityProduct.value < 0) {
            quantityProduct.value = 0;
            quantityProduct.setAttribute("value", 0);
        } else {
            quantityProduct.setAttribute("value", quantityProduct.value);
        }
    }
}

function setLocalStorage() {

    totalQuantityProduct += InputQuantityProduct;

    console.log(totalQuantityProduct)

    window.localStorage.setItem("Quantity_" + fileName, totalQuantityProduct);
    window.localStorage.setItem("Cost_" + fileName, cost.innerText);
    // lấy value của key này
    const valueOfKeyStorage = window.localStorage.getItem("Quantity_" + fileName);

    console.log(valueOfKeyStorage);
}


