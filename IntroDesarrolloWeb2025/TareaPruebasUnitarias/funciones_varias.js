// Este archivo contiene funciones de operaciones basicas que investige y estan en el README.md

// Devuelve un objeto usuario
//Usando .toEqual()
function usuariosIguales(nombre, edad, curp) {
  return { nombre, edad, curp};
}

// Devuelve true si es mayor o igual a 18
//Usando .toBeTruthy() y .toBeFalsy()
function mayorDeEdad(edad) {
  return edad >= 18;
}

// Devuelve null explícitamente
//Usando .toBeNull()
function valorNull() {
  return null;
}

// Devuelve undefined explícitamente
//Usando .toBeUndefined()
function valorIndefinido() {
  return undefined;
}

// Lanza un error si el número es negativo
//Usando .toThrow()
function lanzarErrorSiNegativo(numero) {
  if (numero < 0) {
    throw new Error("ERROR POR NUMERO NEGATIVO");
  }
  return numero;
}

// Devuelve un arreglo de números
//Usando .toStrictEqual() Esta es en la unica que tuve duda y le preguntea una IA!!
//Verifica que todo lo que esta en el arreglo sea estrictamente del mismo tipo
function mismoTipo() {
  return [1, 2, 3];
}

module.exports = { usuariosIguales,mayorDeEdad, valorNull, valorIndefinido, lanzarErrorSiNegativo, mismoTipo };