const BASE_URL = 'https://api.funtranslations.com/translate';

const form = document.querySelector('.yoda__form');
const output = document.querySelector('.yoda__output');
const errorElement = document.querySelector('.yoda__error');

form.addEventListener('submit', submitHandler);

function submitHandler(e) {
  e.preventDefault();
  const input = e.target.elements.text.value;

  if (!input.length) {
    return (errorElement.textContent = 'This field is required');
  }
  errorElement.textContent = '';
  getYodaSpeak(input)
    .then(({ contents: { translated } }) => (output.textContent = translated))
    .catch(error => {
      console.log(error);
      output.textContent = 'You are out of free calls!';
    });
}

function getYodaSpeak(text) {
  const url = `${BASE_URL}/yoda.json`;
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `text=${encodeURIComponent(text)}`,
  };

  return fetch(url, requestOptions)
    .then(response => {
      if (!response.ok) {
        throw new Error('Translation request failed.');
      }
      return response.json();
    })
    .catch(error => {
      console.error(error.message);
      return null;
    });
}
