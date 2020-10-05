const burgerExit = document.querySelector('.burgerExit');
const burgerOpen = document.querySelector('.burgerOpen');
const navToggle = document.querySelector('.burgerNav');
const newsletterMail = document.querySelector('.newsletterInput input');
const scrollAnchor = document.querySelector('.anchor');
let navOpen = false


function burgerClick() {
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
        navToggle.style.right = -220;
        navOpen = false
    }
}

newsletterMail.addEventListener('focus',(e)=> {
    newsletterMail.value ="";
})

newsletterMail.addEventListener('blur',(e)=> {
    newsletterMail.value ="Your email";
})








document.addEventListener('scroll', function scrolling(){
    if (window.pageYOffset >= 200){
        console.log('tak')
        scrollAnchor.style.opacity = 0.5;
     
       
    } else {
        scrollAnchor.style.opacity = 0;
    }
    
})

