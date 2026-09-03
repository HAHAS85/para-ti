function moveButton() {
  const btnNo = document.getElementById('btn-no');
  // Genera coordenadas aleatorias para que el botón juegue a escaparse
  const x = Math.random() * (window.innerWidth - btnNo.offsetWidth);
  const y = Math.random() * (window.innerHeight - btnNo.offsetHeight);
  
  btnNo.style.position = 'fixed';
  btnNo.style.left = `${x}px`;
  btnNo.style.top = `${y}px`;
}

function accepted() {
  // Mensaje que le saldrá en pantalla cuando presione "Sí"
  alert('¡Trato hecho! Prepárate para tu abrazo y beso gigante cuando te vea ❤️👩‍❤️‍👨');
}