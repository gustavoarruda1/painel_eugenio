function menuView() {
    let menuMobile = document.querySelector('.aside-responsivo');
    let icon = document.querySelector(".icon");

    // Verifica se o menu está aberto ou fechado e faz o toggle
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        icon.src = "./img/menu.svg";  // Ícone de menu normal
    } else {
        menuMobile.classList.add('open');
        icon.src = "./img/menu-x-icon.svg";  // Ícone de menu fechado
    }
}

// Detecta cliques fora do menu para fechar
document.addEventListener('click', function (event) {
    let menuMobile = document.querySelector('.aside-responsivo');
    let icon = document.querySelector(".icon");
    let menuButton = document.querySelector(".button-menu");  // Botão que abre/fecha o menu

    // Verifica se o clique foi fora do menu e do botão
    if (!menuMobile.contains(event.target) && !menuButton.contains(event.target)) {
        // Fecha o menu se estiver aberto
        if (menuMobile.classList.contains('open')) {
            menuMobile.classList.remove('open');
            icon.src = "./img/menu.svg";  // Ícone de menu normal
        }
    }
});