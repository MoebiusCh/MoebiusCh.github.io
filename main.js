const btnMenu = document.querySelector(".icon-menu")
const childMenu = document.querySelectorAll(".icon-menu .icon")

btnMenu.addEventListener('click', (e) => {
    childMenu.forEach((item) => {
        item.classList.toggle("change")
    }
    )
})