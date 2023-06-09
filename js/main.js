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
const customerCard = document.querySelector('.customer-card');
const carousel = document.querySelector('.carousel');
const arrowBtns = document.querySelectorAll('.customer-card [class*="fa-angle"]');
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const carouselChildrens = [...carousel.children];
let isDragging = false,
    startX,
    startScrollLeft,
    timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});
// Insert copies of the last few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

//  Add event listener for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        carousel.scrollLeft += btn.id === "left-arr" ? -firstCardWidth : firstCardWidth;
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

const autoPlay = () => {
    if (window.innerWidth < 800) return; // Return if window width is smaller than 800
    timeoutId = setTimeout(() => {
        carousel.scrollLeft += firstCardWidth;
    }, 2500);
}
autoPlay();

const infiniteScroll = () => {
    if (carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if (!customerCard.matches(":hover")) {
        autoPlay();
    }
}
carousel.addEventListener('mousedown', dragStart)
carousel.addEventListener('mousemove', dragging);
document.addEventListener('mouseup', dragStop);
carousel.addEventListener('scroll', infiniteScroll);
carousel.addEventListener('mouseenter', () => clearTimeout(timeoutId));
carousel.addEventListener('mouseleave', autoPlay);