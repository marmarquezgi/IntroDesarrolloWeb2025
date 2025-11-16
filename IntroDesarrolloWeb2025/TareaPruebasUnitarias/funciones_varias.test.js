const { usuariosIguales,mayorDeEdad, valorNull, valorIndefinido, lanzarErrorSiNegativo, mismoTipo } = require("./funciones_varias.js");

// .toEqual()
test("Valida que dos usuarios sean la misma persona", () => {
  const usuario = usuariosIguales("Ana", 25, "MAGM01027MDFLRLA6");
  expect(usuario).toEqual({ nombre: "Ana", edad: 25, curp: "MAGM01027MDFLRLA6"});
});

// .toBeTruthy()
test("Regresa true para 18", () => {
  expect(mayorDeEdad(18)).toBeTruthy();
});

// .toBeFalsy()
test("Regresa false para 17", () => {
  expect(mayorDeEdad(17)).toBeFalsy();
});

// .toBeNull()
test("Regresa null", () => {
  expect(valorNull()).toBeNull();
});

// .toBeUndefined()
test("Regresa undefined", () => {
  expect(valorIndefinido()).toBeUndefined();
});

// .toThrow()
test("Lanza error si el número es negativo", () => {
  expect(() => lanzarErrorSiNegativo(-1)).toThrow("ERROR POR NUMERO NEGATIVO");
});

// .toStrictEqual()
test("Regresa un arreglo con numeros estrictamente igual", () => {
  expect(mismoTipo()).toStrictEqual([1, 2, 3]);
});
