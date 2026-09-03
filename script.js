function moveButton() {
  const btnNo = document.getElementById('btn-no');
  
  // Obtenemos el ancho y alto de la pantalla del celular
  const width = window.innerWidth - btnNo.offsetWidth - 20;
  const height = window.innerHeight - btnNo.offsetHeight - 20;
  
  // Generamos una nueva posición aleatoria
  const newX = Math.max(10, Math.floor(Math.random() * width));
  const newY = Math.max(10, Math.floor(Math.random() * height));
  
  btnNo.style.position = 'fixed';
  btnNo.style.left = `${newX}px`;
  btnNo.style.top = `${newY}px`;
}

function accepted() {
  alert('¡Trato hecho! Prepárate para tu abrazo y beso gigante cuando te vea ❤️👩‍❤️‍👨');
}