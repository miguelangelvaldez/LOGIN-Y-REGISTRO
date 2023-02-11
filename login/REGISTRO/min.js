const form = document.querySelector("fieldset");
const nameInput = document.querySelector('input[placeholder="NOMBRE COMPLETO"]');
const usernameInput = document.querySelector('input[placeholder="USUARIO"]');
const birthdateInput = document.querySelector('input[placeholder="FECHA DE NACIMIENTO"]');
const emailInput = document.querySelector('input[placeholder="CORREO ELECTRONICO"]');
const colorInput = document.querySelector('input[placeholder="COLOR FAVORITO"]');
const passwordInput = document.querySelector('input[placeholder="CONTRASEñA"]');
const checkboxInput = document.querySelectorAll('input[type="checkbox"]');

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = nameInput.value;
  const username = usernameInput.value;
  const birthdate = birthdateInput.value;
  const email = emailInput.value;
  const color = colorInput.value;
  const password = passwordInput.value;
  let progress = "";

  checkboxInput.forEach(function(checkbox) {
    if (checkbox.checked) {
      progress = checkbox.value;
    }
  });

  if (!name || !username || !birthdate || !email || !color || !password || !progress) {
    alert("Todos los campos son requeridos");
    return;
  }

  // Aquí puede hacer la lógica adicional para enviar los datos al servidor, etc.

  alert("Formulario enviado exitosamente");
});
