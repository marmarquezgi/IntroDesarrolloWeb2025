Session Storage

¿Que es sessionStorage y cuales son las diferencias que existen con respecto a LocalStorage?
sessionStorage es una API de Web Storage en JavaScript 

localStorage y sessionStorage son propiedades que acceden al objeto Storage y tienen la función de almacenar datos de manera local, la diferencia entre éstas dos es que localStorage almacena la información de forma indefinida o hasta que se decida limpiar los datos del navegador y sessionStorage almacena información mientras la pestaña donde se esté utilizando siga abierta, una vez cerrada, la información se elimina.

Propiedades de sessionStorage
Una sesión de página dura mientras la pestaña o el navegador están abiertos y sobrevive a las recargas y restauraciones de la página.
Al abrir una página en una nueva pestaña o ventana se crea una nueva sesión con el valor del contexto de navegación de nivel superior, que difiere de cómo funcionan las cookies de sesión.
Al cerrar la pestaña/ventana se finaliza la sesión y se borran los datos en sessionStorage
sessionStorage solo existe dentro de la pestaña actual del navegador.
Otra pestaña con la misma página tendrá un almacenaje distinto.
Pero se comparte entre iframes en la pestaña (asumiendo que tengan el mismo orígen).
Los datos sobreviven un refresco de página, pero no cerrar/abrir la pestaña.

Estructura
Validar objeto Storage en el navegador
if (typeof(Storage) !== 'undefined') {
  // Código cuando Storage es compatible
} else {
 // Código cuando Storage NO es compatible
}

Guardar datos en Storage
// Opción 1 ->  sessionStorage.setItem(name, content)
// Opción 2 ->sessionStorage.name = content
// name = nombre del elemento
// content = Contenido del elemento
sessionStorage.setItem('Nombre', 'Miguel Antonio')
sessionStorage.Apellido = 'Márquez Montoya'

Recuperar datos de Storage
// Opción 1 -> sessionStorage.getItem(name, content)
// Opción 2 -> sessionStorage.name
// Obtenemos los datos y los almacenamos en variables
let firstName = sessionStorage.getItem('Nombre'),
    lastName  = sessionStorage.Apellido
console.log(`Hola, mi nombre es ${firstName} ${lastName}`)
// Imprime: Hola, mi nombre es Miguel Antonio Márquez Montoya


Eliminar datos de Storage
// sessionStorage.removeItem(name)
sessionStorage.removeItem(Apellido)
Limpiar todo el Storage
Limpiar todo el Storage
sessionStorage.clear()

Requerimientos
Navegador compatible con HTML5 Web Storage (todos los modernos lo soportan).
El acceso es sin necesidad de instalar librerías externas.
Se utiliza en el contexto del DOM, solo en navegadores (no en Node.js de forma nativa).





