const burgerExit = document.querySelector('.burgerExit');
const burgerOpen = document.querySelector('.burgerOpen');
const navToggle = document.querySelector('.burgerNav');
let navOpen = false

function xd() {
    if (navOpen === false) {
        burgerOpen.style.opacity = 0
        burgerOpen.style.transform = 'rotate(360deg)'
        burgerExit.style.opacity = 1
        burgerExit.style.transition = '1300ms ease-in'
        navToggle.style.right = 0;
        navOpen = true
    } else {
        burgerOpen.style.opacity = 1
        burgerOpen.style.transform = 'rotate(0deg)'
        burgerExit.style.opacity = 0
        burgerExit.style.transition = '100ms ease-out'
        navToggle.style.right = -200;
        navOpen = false
    }
}

