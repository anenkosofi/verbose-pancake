const timeContainer = document.querySelector('#time');

const year = new Date().toLocaleDateString('uk-UA', { year: 'numeric' });

timeContainer.innerHTML = year;
