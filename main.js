const form = document.querySelector('#form-contactMe');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const jsonData = {};

  formData.forEach((value, key) => {
    jsonData[key] = value;
  });
  console.log(jsonData);
});

const inputs = document.querySelectorAll('.inputFocus');

function handleFocus(event) {
  document.querySelectorAll('label.active');
  const label = document.querySelector(`label[for="${event.target.id}"]`);
  if (label) {
    label.classList.add('active');
  }
}

inputs.forEach((input) => {
  input.addEventListener('focus', handleFocus);
  input.addEventListener('blur', (event) => {
    const label = document.querySelector(`label[for="${event.target.id}"]`);
    if (label && event.target.value.trim() === '') {
      label.classList.remove('active');
    }
  });
});
