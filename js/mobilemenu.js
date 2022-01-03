(() => {
  const refs = {
    openMobilemenuBtn: document.querySelector('.mobile-menu-open'),
    closeMobilemenuBtn: document.querySelector('.mobile-close'),
    mobilemenu: document.querySelector('.hero-mobile-menu'),
  };

  refs.openMobilemenuBtn.addEventListener('click', toggleMobilemenu);
  refs.closeMobilemenuBtn.addEventListener('click', toggleMobilemenu);

  function toggleMobilemenu() {
    refs.mobilemenu.classList.toggle('is-hidden');
  }
})();