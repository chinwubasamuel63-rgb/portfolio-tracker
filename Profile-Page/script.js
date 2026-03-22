document.addEventListener('DOMContentLoaded', function() {
  const navSvg = document.getElementById('nav-svg');
  // Target the 'nav' element inside '.nav-links'
  const navContainer = document.querySelector('.nav-links nav');

  navSvg.addEventListener('click', function() {
    navContainer.classList.toggle('active');
  });
});
