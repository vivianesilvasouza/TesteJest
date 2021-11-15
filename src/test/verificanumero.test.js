const { validarNumero } = require("../models/validar_numero");

test("Testa se 3 é maior que 5", () => {
  expect(validarNumero(3, 5)).toBe(5);
});

test("Testa se 1 é maior que 2", () => {
  expect(validarNumero(1, 2)).toBe(2);
});
