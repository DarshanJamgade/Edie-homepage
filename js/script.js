const menu = document.querySelector('[data-menu]');
const navList = document.querySelector('[data-nav-list]');


menu.addEventListener('click', () => {
    navList.classList.toggle('show');
    menu.classList.toggle('cancel')
})