const Header = document.querySelector('header#menu-container');
Header.innerHTML = `<div class="left-menu menu">
<img src="https://wise.com/public-resources/assets/logos/wise-personal/flag_inverse.svg" class="icon">
</div>
<nav>
<div class="right-menu menu">
    <div class="TrangChu item"><a href="../../index.html">
            Trang chủ</a></div>
    <div class="LienHe item">
        <a href="../../contract.html">Liên hệ</a>
    </div>
    <div class="Shopping-Cart item">
        <a href="../../store.html"><i class="fa fa-shopping-cart" aria-hidden="true"></i></a>
    </div>
    <div class="DangNhap item"><a href="../../DangNhap.html">Đăng nhập</a></div>
</div>
</nav>`;

const footer = document.querySelector('footer');
footer.innerHTML = `
        <div class="footer-item">
            <ul>
                <li>Sản phẩm tại cửa hàng được cung cấp từ Yamaha chính hãng</li>
                <li>SĐT: 01001110001</li>
            </ul>
            <ul>
                <li>
                    <h4>Sản Phẩm</h4>
                </li>
                <li>Piano</li>
                <li>Đàn organ</li>
                <li>Guitars, Basses, & Amps</li>
                <li>Trống</li>
                <li>Bộ kèn đồng/kèn gỗ</li>
            </ul>
        </div>
`;

const head = document.querySelector('head');

const favicon = document.createElement('link');
favicon.rel = "icon";
favicon.href = "https://wise.com/public-resources/assets/icons/wise-personal/favicon.png";
favicon.type = "image/x-icon";

head.appendChild(favicon);