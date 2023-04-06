const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 


  const name = form.elements['name'].value;
  const email = form.elements['email'].value;
  const message = form.elements['message'].value;

  if (!name) {
    alert('Veuillez entrer votre nom.');
    return;
  }

  if (!email) {
    alert('Veuillez entrer votre adresse e-mail.');
    return;
  }

  if (!message) {
    alert('Veuillez entrer un message.');
    return;
  }


  alert('Merci pour votre message !');
  form.reset();
});