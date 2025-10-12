// sessionStorage-utils.js
// Operaciones básicas con sessionStorage

// Insertar un valor
function insertarDato(clave, valor) {
    sessionStorage.setItem(clave, valor);
    console.log("Dato insertado:", clave, valor);
  }
  
  // Leer un valor
  function leerDato(clave) {
    let valor = sessionStorage.getItem(clave);
    if (valor !== null) {
      console.log("Dato encontrado:", clave, valor);
    } else {
      console.log("No existe la clave:", clave);
    }
    return valor;
  }
  
  // Verificar si existe una clave
  function existeDato(clave) {
    let existe = sessionStorage.getItem(clave) !== null;
    console.log("¿Existe", clave, "?", existe);
    return existe;
  }
  
  // Eliminar un valor
  function eliminarDato(clave) {
    sessionStorage.removeItem(clave);
    console.log("Dato eliminado:", clave);
  }
  
  // Limpiar todo el sessionStorage
  function limpiarTodo() {
    sessionStorage.clear();
    console.log("Todos los datos eliminados de sessionStorage");
  }
  