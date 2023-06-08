const openButton = document.querySelector(".open-button")
const closeButton = document.querySelector(".close-button")
const nav = document.querySelector("nav")
let isOpen = false

function openMenu () {
    if (!isOpen) {
        nav.style.display = 'flex'
        isOpen = true
    }
}

openButton.addEventListener("click", openMenu)
closeButton.addEventListener("click", () => {
    nav.style.display = 'none'
    isOpen = false
})