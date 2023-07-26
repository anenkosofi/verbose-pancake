const guard = document.querySelector('.work');
const lines = document.querySelectorAll('.path');

const options = {
  root: null,
  rootMargin: '50px',
  threshold: 1.0,
};

const observer = new IntersectionObserver(showSvgLines, options);

function showSvgLines(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      Array.from(lines).map(
        item => (item.style.animation = 'dash 5s linear forwards')
      );
      observer.unobserve(guard);
    }
  });
}

observer.observe(guard);
