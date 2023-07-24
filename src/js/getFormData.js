const form = document.querySelector('.sign-up__form');
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const nameErrorElement = document.querySelector('#name-error');
const surnameErrorElement = document.querySelector('#surname-error');
const emailErrorElement = document.querySelector('#email-error');

const nameRegex = /^[A-Z][a-zA-Z]*$/;
const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
const nameError =
  'Name must start with an uppercase letter and contain only Latin letters and no spaces';
const surnameError =
  'Surname must start with an uppercase letter and contain only Latin letters and no spaces';
const emailError = 'Invalid email format.';
const emptyError = 'This field is required';

const formValues = {
  name: '',
  surname: '',
  email: '',
};

form.addEventListener('input', inputHandler);

form.addEventListener('submit', submitHandler);

function inputHandler(e) {
  const input = e.target;
  const fieldName = input.name;
  const fieldValue = input.value;

  formValues[fieldName] = fieldValue;
  validateField(fieldName, fieldValue);
}

function submitHandler(e) {
  e.preventDefault();
  const error = {
    name: '',
    surname: '',
    email: '',
  };

  const name = formValues.name;
  const surname = formValues.surname;
  const email = formValues.email;
  const isNameValid = name.length && nameRegex.test(name);
  const isSurnameValid = surname.length && nameRegex.test(surname);
  const isEmailValid = email.length && emailRegex.test(email);
  error.name = !isNameValid ? nameError : '';
  error.surname = !isSurnameValid ? surnameError : '';
  error.email = !isEmailValid ? emailError : '';
  const isFormValid = isNameValid && isSurnameValid && isEmailValid;

  if (!isFormValid) {
    nameErrorElement.textContent = error.name;
    surnameErrorElement.textContent = error.surname;
    emailErrorElement.textContent = error.email;
  } else {
    saveFormDataToLocalStorage();
    e.target.reset();
    if (formValues.name === 'Sigma') {
      showGreetingAnimation();
    }
  }
}

function validateField(fieldName, fieldValue) {
  const errorElement = document.querySelector(`#${fieldName}-error`);
  let errorMessage = '';

  if (!fieldValue.length) {
    errorMessage = emptyError;
  } else if (fieldName === 'name' && !nameRegex.test(fieldValue)) {
    errorMessage = nameError;
  } else if (fieldName === 'surname' && !nameRegex.test(fieldValue)) {
    errorMessage = surnameError;
  } else if (fieldName === 'email' && !emailRegex.test(fieldValue)) {
    errorMessage = emailError;
  }

  errorElement.textContent = errorMessage;
}

function saveFormDataToLocalStorage() {
  localStorage.setItem('formValues', JSON.stringify(formValues));
}

function showGreetingAnimation() {
  const date = getDate();
  const markup = `<h1 class="modal__heading">Hello, ${formValues.name}!</h1>
    <p class="modal__description">Today ${date}, for users with your name, there's a 120% discount when placing an order!</p>`;
  modal.insertAdjacentHTML('beforeend', markup);
  document.body.style.overflow = 'hidden';
  backdrop.classList.remove('is-hidden');

  setTimeout(() => {
    backdrop.classList.add('is-hidden');
    document.body.style.overflow = 'visible';
    modal.innerHTML = '';
  }, 5000);
}

function getDate() {
  const currentDate = new Date();

  const day = currentDate.getDate().toString().padStart(2, '0');
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const year = currentDate.getFullYear();

  return `${month}.${day}.${year}`;
}
