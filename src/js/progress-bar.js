const progressLine = document.querySelector('.header__progress');

window.addEventListener('scroll', updateProgressLine);

function updateProgressLine() {
  const windowHeight = window.innerHeight;
  const pageHeight = document.body.clientHeight;
  const scrolledHeight = window.scrollY;
  const scrollPercentage = (scrolledHeight / (pageHeight - windowHeight)) * 100;
  progressLine.style.width = `${scrollPercentage}%`;
}
