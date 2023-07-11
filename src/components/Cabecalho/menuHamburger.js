const button = document.querySelector('.menu__button')
const imgMenuHamburguer = "url(https://github.com/RamosCarlosEduardo/Barbearia-Alura/blob/main/images/menu-burguer.png?raw=true)"
const imgMenuFechar = "url(https://raw.githubusercontent.com/RamosCarlosEduardo/Alura-Geek/3080d9d172830fd1b206f6ef82a88ab4ab7b6005/public/assets/img/icon-fechar.svg)"

button.addEventListener('click', () => {
  const menuNav = document.querySelector('.menu__nav')
  menuNav.classList.contains('menu-active')
    ? button.style.backgroundImage = imgMenuHamburguer
    : button.style.backgroundImage = imgMenuFechar
  menuNav.classList.toggle('menu-active')
})