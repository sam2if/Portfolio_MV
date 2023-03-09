const hamburger = document.querySelector('.hamburger');
const navnavMenu = document.querySelector('.navnav-menu');

document.querySelectorAll('a[href^="#"').forEach((anchor) => {
  anchor.addEventListener('click', () => {
    navnavMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
    document.querySelector(this.getAttribute('href').scrollIntoView({
      behavior: 'smooth',
    }));
  });
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navnavMenu.classList.toggle('active');
});

document.querySelectorAll('navnav-item').forEach((n) => n.addEventListener('click', () => {
  navnavMenu.classList.remove('active');
}));
