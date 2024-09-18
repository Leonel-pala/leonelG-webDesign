const form = document.querySelector('#form-contactMe');
const btnSubmit = document.getElementById('form-submit');
const errorMessage = document.getElementById('errorMessage');
let habilitar = true;
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (habilitar) {
    habilitar = false;
    btnSubmit.classList.add('load');
    btnSubmit.innerHTML = 'Enviando...';
    const formData = new FormData(form);
    const jsonData = {};

    formData.forEach((value, key) => {
      jsonData[key] = value;
    });
    const { name, email, numberPhone, message } = jsonData;
    if (!name || !email || !numberPhone || !message) {
      errorMessage.innerHTML = 'Todos los campos son obligatorios';
      btnSubmit.classList.remove('load');
      btnSubmit.innerHTML = 'Enviar mensaje';
      habilitar = true;
      return;
    } else {
      errorMessage.innerHTML = '';
    }
    const url = 'https://api-send-email-xfux.onrender.com/sendEmail';
    const sendEmail = fetch(url, {
      method: 'POST',
      body: JSON.stringify(jsonData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .catch((error) => {
        console.error('Error:', error);
        errorMessage.innerHTML =
          'Upsss.. surgio un error, intentelo de nuevo o mas tarde';
        habilitar = true;
      })
      .then((response) => {
        form.reset();
        btnSubmit.classList.remove('load');
        btnSubmit.innerHTML = 'Enviar mensaje';

        habilitar = true;
      });
  }
});
