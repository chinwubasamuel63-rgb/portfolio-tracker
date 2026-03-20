document.addEventListener('DOMContentLoaded', function(){
  const navSvg = document.getElementById('nav-svg');
  const navLinks = document.getElementsByClassName('nav-links');

  navSvg.addEventListener('click', function(){
    navLinks.classList.toggle('active');
  });
});
