const guard = document.querySelector('.news');
const news = document.querySelectorAll('.news__item');

const options = {
  root: null,
  rootMargin: '400px',
  threshold: 1.0,
};

const observer = new IntersectionObserver(showNews, options);

function showNews(entries, observer) {
  entries.forEach(entry => {
    Array.from(news).map(item =>
      entry.isIntersecting ? (item.style.opacity = 1) : (item.style.opacity = 0)
    );
  });
}

observer.observe(guard);
