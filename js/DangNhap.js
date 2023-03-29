function showPassword() {
    var passwordInputBox = document.querySelector('[name="psw"]');
    if (passwordInputBox.type === "password") {
        passwordInputBox.type = "text";
    } else {
        passwordInputBox.type = "password";
    }
}
let userName = "Phatcute";
let password = "Phat";
const uname = document.querySelector('[name="uname"]');
const psw = document.querySelector('[name="psw"]');
let inputUserName = "";
let inputPassword = "";
uname.addEventListener('keyup', function (e) {
    inputUserName = uname.value;
    changeBorderColor(inputUserName, userName, uname);
})
psw.addEventListener('keyup', function (e) {
    inputPassword = psw.value;
    changeBorderColor(inputPassword, password, psw);
})

function changeBorderColor(InputValue, Data, box) {
    if (InputValue != Data) {
        box.style.borderColor = "red";
    } else {
        box.style.borderColor = "green"
    }
}