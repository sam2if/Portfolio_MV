const hamburger = document.querySelector('.hamburger');
const navnavMenu = document.querySelector('.navnav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navnavMenu.classList.toggle('active');
});

document.querySelectorAll('navnav-item').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navnavMenu.classList.remove('active');
}));