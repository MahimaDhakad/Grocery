let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {

    searchForm.classList.toggle('activa');
    shoppingCart.classList.remove('activa');
    loginform.classList.remove('activa');
    navbar.classList.remove('activa');



}


let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {

    shoppingCart.classList.toggle('activa');
    searchForm.classList.remove('activa');
    loginform.classList.remove('activa');
    navbar.classList.remove('activa');

}


let loginform = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {

    loginform.classList.toggle('activa');
    shoppingCart.classList.remove('activa');
    searchForm.classList.remove('activa');
    navbar.classList.remove('activa');

}


let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {

    navbar.classList.toggle('activa');
    loginform.classList.remove('activa');
    shoppingCart.classList.remove('activa');
    searchForm.classList.remove('activa');
}

window.onscroll = () => {

    searchForm.classList.remove('activa');
    shoppingCart.classList.remove('activa');
    loginform.classList.remove('activa');
    navbar.classList.remove('activa');



}


var swiper = new swiper(".product-slider", {
    loop: true,
    spacebetween: 20,

    autoplay: {
       delay:7500,
       disableOnInteraction: false,
    },

    breakpoints: {
        0: {
            slidesperview: 1,
        },
        768: {
            slidesperview: 2,
        },
        1024: {
            slidesperview: 3,
        },
    },
});

var swiper = new swiper(".review-slider", {
    loop: true,
    spacebetween: 20,

    autoplay: {
       delay:7500,
       disableOnInteraction: false,
    },

    breakpoints: {
        0: {
            slidesperview: 1,
        },
        768: {
            slidesperview: 2,
        },
        1024: {
            slidesperview: 3,
        },
    },
});