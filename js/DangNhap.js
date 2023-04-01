const uname = document.querySelector('[name="uname"]');
const psw = document.querySelector('[name="psw"]');
const LoginBtn = document.querySelector('[name="loginBtn"]');

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

LoginBtn.addEventListener('click', function (event) {
    event.preventDefault();
    if (inputUserName == userName && inputPassword == password) {
        alert("Bạn đã đăng nhập thành công!");
    } else {
        alert("Bạn đã nhập sai tài khoản hoặc mật khẩu!");
        uname.value = ""
        psw.value = ""
    }
})