const button = document.querySelector('.menu-toggle');
const nav = document.querySelector('.navbar nav');
const links = document.querySelectorAll('.navbar nav a');

button.addEventListener('click', () => {
  nav.classList.toggle('show');
});

/* ---- close menu after link tap ---- */
links.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('show');
  });
});