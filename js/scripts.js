const selectors = {
    openMenu: '.header__open-menu',
    headerMenu: '.header__menu'
}
const openMenu = document.querySelector(selectors.openMenu);
const headerMenu = document.querySelector(selectors.headerMenu);


openMenu.addEventListener('click', () => {
    openMenu.classList.toggle('active')
    headerMenu.classList.toggle('active')
  });
