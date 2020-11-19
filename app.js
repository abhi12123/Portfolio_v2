AOS.init();
const hamburger=document.querySelector('.hamburger');
const hamburgerNavbar=document.querySelector('.hamburger-navbar')
const closeBtn=document.querySelector('#close-btn')
hamburger.addEventListener('click',()=>{
    hamburgerNavbar.style.transform='translateX(0)';
})
closeBtn.addEventListener('click',()=>{
    hamburgerNavbar.style.transform='translateX(-100%)';
})