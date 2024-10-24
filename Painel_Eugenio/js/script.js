function menuView() {
    let menuMobile = document.querySelector('.aside-responsivo');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "./img/menu.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector(".icon").src = "./img/menu-x-icon.svg";
    }
}