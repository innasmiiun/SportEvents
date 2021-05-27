window.addEventListener('load', () => {
    let seconds = 0;
    let el = document.getElementById('seconds-counter');

    function incrementSeconds() {
        seconds += 1;
        el.innerText = seconds;
    }

    setInterval(incrementSeconds, 1000);

    const menu = document.getElementById('menu');
    const menuButton = document.getElementById('menu__button');

    function showHideMenu() {
        menu.classList.toggle("menu__mobile");
        menuButton.classList.toggle("menu__close");
    }
    menuButton.addEventListener('click', showHideMenu);
});

