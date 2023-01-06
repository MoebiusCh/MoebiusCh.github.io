const tabcontent = document.querySelectorAll('.tabcontent')
const tablinks = document.querySelectorAll('.tablinks')

tablinks.forEach((item, index) => {
    item.addEventListener('mouseover', (e) => {
        e.target.classList.add("active");
        if (e.target.classList.contains('tokyo')) {
            document.getElementById('Tokyo').style.display = "block";
        }
        else if (e.target.classList.contains('paris')) {
            document.getElementById('Paris').style.display = "block";
        }
        else if (e.target.classList.contains('london')) {
            document.getElementById('London').style.display = "block";
        }
    })
    item.addEventListener('mouseout', (e) => {
        tabcontent.forEach((item, index) => {
            tabcontent[index].style.display = "none";
        })
        tablinks.forEach((item, index) => {
            item.className = item.className.replace("active", "");
        })
    })
})