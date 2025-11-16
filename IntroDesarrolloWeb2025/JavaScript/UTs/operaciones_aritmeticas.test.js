const { sumar, restar, dividir, multiplicar, modulo, operar } = require("./operaciones_aritmeticas.js");

test("Debe sumar dos números correctamente", () => {
  expect(sumar(2, 3)).toBe(5);
});

test("Debe restar dos números correctamente", () => {
  expect(restar(2, 3)).toBe(-1);
  expect(restar(10, 7)).toBe(3);
});

test("Debe lanzar un error al dividir entre cero", () => {
  expect(() => dividir(10, 0)).toThrow("No se puede dividir entre cero :(");
});

test("Debe multiplicar dos numeros", () => {
  expect(multiplicar(2, 3)).toBe(6);
});

test("Debe darnos el modulo de dos numeros", () => {
  expect(modulo(10, 3)).toBe(1);
  expect(modulo(8, 2)).toBe(0);
});

test("Debe usar la función operar con operaciones válidas", () => {
  expect(operar(5, 3, "sumar")).toBe(8);
  expect(operar(5, 3, "restar")).toBe(2);
  expect(operar(5, 3, "multiplicar")).toBe(15);
  expect(operar(6, 3, "dividir")).toBe(2);
  expect(operar(10, 3, "modulo")).toBe(1);
});



