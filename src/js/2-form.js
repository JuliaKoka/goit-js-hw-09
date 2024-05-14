const form = document.querySelector('.feedback-form');
const email = form.querySelector('input');
const textarea = form.querySelector('textarea');

const formData = {
  email: '',
  message: '',
};

form.addEventListener('input', () => {
  formData.email = email.value.trim();
  formData.message = textarea.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (email.value === '' || textarea.value === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);

    localStorage.removeItem('feedback-form-state');
    form.reset();
  }
});
function refillForm() {
  const info = JSON.parse(localStorage.getItem('feedback-form-state'));

  const { email, message } = form.elements;
  if (info !== null) {
    email.value = info.email;
    message.value = info.message;
  }
}

window.addEventListener('load', refillForm);
