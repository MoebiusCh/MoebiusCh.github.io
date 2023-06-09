class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="top-header"><!-- Top Menu -->
        <div class="logo logo-res">
            <a href="./index.html">
                <img src="./imgs/Logo.png" alt="logo">
            </a>
        </div>
        <nav id="navbar-res">
            <div class="icon-nav">
                <i class="fa-solid fa-bars"></i>
            </div>
        </nav>
        <nav id="navbar">
            <ul class="navbar-menu">
                <li><a href="" class="nav-menu-item">
                        <i class="fas fa-handshake"></i> Hợp tác với chúng tôi</a></li>
                <li><a href="" class="nav-menu-item">
                        <i class="fa-solid fa-bookmark"></i> Đã lưu</a></li>
                <li><a href="" class="nav-menu-item"><i class="fa-solid fa-calendar-days"></i> Đặt chỗ của
                        tôi</a></li>
                <li><a href="" class="nav-menu-item"><i class="fa-solid fa-headset"></i></i></i> Trung tâm trợ
                        giúp</a></li>
                <li><a href="./DangNhap.html" class="nav-menu-item"><i class="fa-solid fa-user"
                            style="color: #9c9c9c;"></i>
                        Đăng Nhập <i class="fa-solid fa-chevron-down fa-2xs"></i></a></li>
                <li><a href="./DangKy.html" class="nav-menu-item ĐK"><button>Đăng Ký</button></a></li>
            </ul>
        </nav>

    </div> <!-- End top-header -->
        `
    }
}

customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
    /* Create MyFooter */
    connectedCallback() {
        this.innerHTML = `
    <div class="rows">
        <h2>Liên hệ</h2>
        <div class="address">
            <div class="logo-brand">
                <img src="./imgs/Logo.png">
            </div>
            <div class="city">
                <p> <i class="fa fa-map-marker-alt" aria-hidden="true"></i> Hồ Chí Minh</p>
                <p> <i class="fa fa-map-marker-alt" aria-hidden="true"></i> Hà Nội</p>
                <p> <i class="fa fa-map-marker-alt" aria-hidden="true"></i> Đà Nẵng</p>
            </div>
            <div class="address-detail">
                <ul>
                    <li>190-192 Trần Quý, Phường 6, Quận 11, Tp. Hồ Chí Minh </li>
                    <li>54 Phạm Hồng Thái, Bến Thành, Quận 1, Tp. Hồ Chí Minh </li>
                    <li>164 Lê Thánh Tôn, Phường Bến Thành, Quận 1, TP. Hồ Chí Minh </li>
                </ul>
                <ul>
                    <li>30 Phan Chu Trinh, Quận Hoàn Kiếm, TP. Hà Nội </li>
                </ul>
                <ul>
                    <li>174 Nguyễn Văn Linh, Quận Thanh Khê, TP. Đà Nẵng </li>
                </ul>
            </div>
        </div>
        <div class="footer-row-2 flex-box">
            <div class="flex-item">
                <h2>Bản đồ</h2>
                <div class="map"> <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4440496233315!2d106.62348867495868!3d10.853791489299727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752a20d8555e69%3A0x743b1e9558fb89e0!2sOrbital!5e0!3m2!1sen!2s!4v1686335017619!5m2!1sen!2s"
                        width="500" height="300" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div class="flex-item social-box">
                <h2>Kết nối</h2>
                <div class="social-item">
                    <i class="fa-brands fa-facebook" style="color: #ffffff;"></i>
                    <i class="fa-brands fa-youtube" style="color: #ffffff;"></i>
                    <i class="fa-brands fa-instagram" style="color: #ffffff;"></i>
                </div>
            </div>
        </div>
    </div>
        `
    }
}

customElements.define('my-footer', MyFooter)