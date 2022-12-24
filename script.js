const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('menu-icon');
let navlist = document.querySelector('.navlist');

menu.oneclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onescroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};