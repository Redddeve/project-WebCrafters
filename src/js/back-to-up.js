(() => {
  window.addEventListener('scroll', function () {
    var button = document.getElementById('back-to-up');
    if (button) {
      button.style.display =
        window.scrollY > window.innerHeight ? 'block' : 'none';
    }
  });

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
})();
