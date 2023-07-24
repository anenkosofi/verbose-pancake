window.addEventListener('load', showLoader);

function showLoader() {
  document.body.style.overflow = 'hidden';
  const loader = document.querySelector('.loader');

  setTimeout(function () {
    loader.classList.add('is-hidden');
    document.body.style.overflow = 'visible';
  }, 5000);
}
