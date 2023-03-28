function doanso() {
    var sobk = document.forms['doansoform']['sobk'].value;
    var x = 10 + Math.round(15 * Math.random());

    var kq = '';
    if (x == sobk) {
        kq = 'Bạn đoán đúng rồi !' + x;
    } else if (sobk < x) {
        kq = 'Rất tiếc. Số bạn nhập nhỏ hơn số may mắn! ' + x;
    } else {
        kq = 'Rất tiếc. Số bạn nhập lớn hơn số may mắn! ' + x;
    }
    document.querySelector('#ketqua').innerHTML = kq;
}
