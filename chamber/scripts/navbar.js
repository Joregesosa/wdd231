const menu_button = document.querySelector('#menu_button');

menu_button.addEventListener('click', () => { 
    menu_button.classList.toggle('open');
});