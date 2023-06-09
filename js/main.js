var nav = document.querySelector('nav#navbar')
var navBtn = document.querySelector('#navbar-res .icon-nav')


navBtn.addEventListener('click', function () {
    /* check exist classList */
    console.log(nav.classList.contains('active'))
    if (!nav.classList.contains('active')) {
        nav.classList.add('active')
        return;
    }
    nav.classList.remove('active')
})


/* Slider Customer*/
const carousel = document.querySelector('.carousel');
const arrowBtns = document.querySelectorAll('.customer-card [class*="fa-angle"]');
const firstCardWidth = carousel.querySelector(".card").offsetWidth;

let isDragging = false,
    startX,
    startScrollLeft;

//  Add event listener for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        console.log(btn.id)
        carousel.scrollLeft += btn.id === "left-arr" ? - firstCardWidth : firstCardWidth
    });
})

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragging) return; //isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = (e) => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

carousel.addEventListener('mousedown', dragStart)
carousel.addEventListener('mousemove', dragging);
document.addEventListener('mouseup', dragStop);