window.addEventListener("load", function () {
    const slider = document.querySelector(".slider");
    const sliderMain = document.querySelector(".slider-main");
    const sliderItem = document.querySelectorAll(".slider-item");
    const nextButton = document.querySelector(".slider-next");
    const prevBtn = document.querySelector(".slider-prev");
    const dotItems = document.querySelectorAll(".slider-dot-item");
    const sliderItemWidth = sliderItem[0].offsetWidth;
    const slidesLength = sliderItem.length;
    let positionX = 0;
    let index = 0;
    // sliderMain.style.width = `${slidesLength * sliderItemWidth}px`
    nextButton.addEventListener('click', function () {
        handleChange(1);
    });
    prevBtn.addEventListener('click', function () {
        handleChange(-1);
    });
    setInterval(() => {
        handleChange(1);
    }, 3000);

    [...dotItems].forEach(function (item) {
        item.addEventListener("click", (e) => {
            [...dotItems].forEach(function (element) {
                element.classList.remove("active");
            });
            // [...dotItems][index].classList.add('active');
            e.target.classList.add('active');
            const slideIndex = parseInt(e.target.dataset.index);
            index = slideIndex;

            positionX = -1 * sliderItemWidth * index;
            sliderMain.style = `transform: translateX(${positionX}px)`;
        })
    });
    function fillDot() {
        [...dotItems].forEach(function (element) {
            element.classList.remove("active");
        });
        [...dotItems][index].classList.add('active');
    }
    function handleChange(direction) {

        if (direction === 1) {
            if (index >= slidesLength - 1) {
                index = 0;
                positionX = 0;
            } else {
                positionX = positionX - sliderItemWidth;
                index++;
            }
            sliderMain.style = `transform: translateX(${positionX}px)`;
            fillDot();
        } else if (direction === -1) {
            if (index <= 0) {
                index = slidesLength - 1;
                positionX = positionX - sliderItemWidth * (slidesLength - 1);
            } else {
                positionX = positionX + sliderItemWidth;
                index--;
            }
            sliderMain.style = `transform: translateX(${positionX}px)`;
            fillDot();
        }
    }
});
