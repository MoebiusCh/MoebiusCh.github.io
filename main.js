const btnMenu = document.querySelector(".icon-menu")
const childMenu = document.querySelectorAll(".icon-menu .icon")

btnMenu.addEventListener('click', (e) => {
    childMenu.forEach((item) => {
        item.classList.toggle("change")
        if (item.classList.contains('change')) {
            document.body.style.backgroundColor = "rgba(0,0,0,0.5)"
        }
        else {
            document.body.style.backgroundColor = ""
        }
    })
})

// set color for window of web browser
