const STORAGE_KEY = "perfilUsuario";

// Al cargar la página, revisa si hay datos en localStorage
window.addEventListener("DOMContentLoaded", () => {
  const guardado = localStorage.getItem(STORAGE_KEY);
  if (guardado) {
    const datos = JSON.parse(guardado);
    mostrarMensaje(datos);
  }
});

// Guarda los datos del formulario en localStorage
function guardarDatos() {
  const nombre = document.getElementById("nombre").value.trim();
  const edad = document.getElementById("edad").value.trim();
  const dia = document.getElementById("dia").value;

  if (!nombre || !edad || !dia) {
    alert("Por favor completa todos los campos.");
    return;
  }

  const datos = { nombre, edad, dia };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(datos));

  mostrarMensaje(datos);
}

// Muestra el saludo en pantalla
function mostrarMensaje({ nombre, edad, dia }) {
  const p = document.getElementById("mensaje");
  p.textContent = `Hola ${nombre}, tienes ${edad} años, tu día de la semana favorito es ${dia}`;
  p.style.display = "block";
}
