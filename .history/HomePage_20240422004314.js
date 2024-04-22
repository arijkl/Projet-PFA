window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navBar');
    if (window.scrollY > 0) {
      navbar.classList.add('shadow');
    } else {
      navbar.classList.remove('shadow');
    }
  });
  