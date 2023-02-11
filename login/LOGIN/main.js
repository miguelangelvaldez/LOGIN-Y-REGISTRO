const form = document.querySelector("form");
const usernameInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  if (!username) {
    alert("Debe ingresar un nombre de usuario");
    return;
  }

  if (!password) {
    alert("Debe ingresar una contraseña");
    return;
  }

  // Aquí puede agregar la lógica para autenticar al usuario, por ejemplo, haciendo una petición a una API de back-end.
  alert(`Datos de inicio de sesión: nombre de usuario = ${username}, contraseña = ${password}`);
});
