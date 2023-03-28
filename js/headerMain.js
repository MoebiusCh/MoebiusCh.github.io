const Header = document.querySelector('header#menu-container')

Header.innerHTML = `<div class="left-menu menu">
<img src="https://wise.com/public-resources/assets/logos/wise-personal/flag_inverse.svg" alt=""
    class="icon">
</div>
<nav>
<div class="right-menu menu">
    <div class="TrangChu item"><a href="./index.html">
            Trang chủ</a></div>
    <div class="LienHe item">
        <a href="./contract.html">Liên hệ</a>
    </div>
    <div class="Shopping-Cart item">
        <a href="./store.html"><i class="fa fa-shopping-cart" aria-hidden="true"></i></a>
    </div>
    <div class="DangNhap item"><a href="./DangNhap.html">Đăng nhập</a></div>
</div>
</nav>
</header>`