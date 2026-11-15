const header = document.querySelector('.header');
const burger = document.querySelector('.burger');
const nav = document.getElementById('nav');

function setMenu(open) {
  header.classList.toggle('menu-open', open);
  burger.setAttribute('aria-expanded', String(open));
  burger.setAttribute('aria-label', open ? 'Закрити меню' : 'Відкрити меню');
}

burger.addEventListener('click', () => {
  setMenu(burger.getAttribute('aria-expanded') !== 'true');
});

// Закрити меню після вибору пункту, по Escape або при переході на десктоп
nav.addEventListener('click', (e) => {
  if (e.target.closest('a')) setMenu(false);
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') setMenu(false);
});
window.matchMedia('(min-width: 1101px)').addEventListener('change', (e) => {
  if (e.matches) setMenu(false);
});
