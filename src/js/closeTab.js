const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');

let confirmTimer = null;
let closeTabTimer = null;

function startTimerAndAskConfirmation() {
  confirmTimer = setTimeout(function () {
    const markup = `<p class="modal__description">Are you still here?</p>
    <button type="button" class="primary-button modal__button">Confirm</button>`;
    modal.insertAdjacentHTML('beforeend', markup);
    backdrop.classList.remove('is-hidden');
    document.body.style.overflow = 'hidden';

    const button = document.querySelector('.modal__button');

    button.addEventListener('click', confirmHandler);

    closeTabTimer = setTimeout(() => {
      window.close();
    }, 10000);
  }, 60000);
}

function confirmHandler() {
  clearTimeout(closeTabTimer);
  clearTimeout(confirmTimer);
  backdrop.classList.add('is-hidden');
  modal.innerHTML = '';
  document.body.style.overflow = 'visible';
  startTimerAndAskConfirmation();
}

document.addEventListener('mousemove', function () {
  clearTimeout(confirmTimer);
  startTimerAndAskConfirmation();
});

document.addEventListener('keydown', function () {
  clearTimeout(timconfirmTimerer);
  startTimerAndAskConfirmation();
});

startTimerAndAskConfirmation();
