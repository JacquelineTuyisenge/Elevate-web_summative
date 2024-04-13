document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const nav = document.querySelector('nav ul');
  
    menuIcon.addEventListener('click', function () {
      nav.classList.toggle('show');
    });
  });
  