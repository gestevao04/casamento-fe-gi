// Controle de navegação simples (SPA)
const links = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');
const header = document.querySelector('header');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    // Remove ativo
    links.forEach(l => l.classList.remove('active'));
    pages.forEach(p => p.classList.remove('active'));

    // Ativa novo
    link.classList.add('active');
    const target = document.querySelector(link.getAttribute('href'));
    target.classList.add('active');

    // Troca tema do header
    if (target.classList.contains('dark')) {
      header.classList.remove('light-header');
      header.classList.add('dark-header');
    } else {
      header.classList.remove('dark-header');
      header.classList.add('light-header');
    }
  });
});

// Define header inicial na home
header.classList.add('dark-header');
