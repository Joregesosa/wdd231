const open_menu = document.querySelector('#open-menu');
const close_menu = document.querySelector('#close-menu');
const main_menu = document.querySelector('#main-menu');

function toggleMenu() {
    main_menu.classList.toggle('show');
    open_menu.classList.toggle('hidden');
}

open_menu.addEventListener('click', toggleMenu);
close_menu.addEventListener('click', toggleMenu);