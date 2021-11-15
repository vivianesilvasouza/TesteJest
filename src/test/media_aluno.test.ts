import { CalcularNota, CalcularNotaInteriro } from "../models/media_aluno";

test("Testa se a nota 84 deve ser arredondada para 85", () => {
  var nota = 84;
  expect(CalcularNota(nota)).toBe("Aprovado, sua nota é: 85");
});

test("Testa se a nota 94 deve ser arredondada para 85", () => {
  var nota = 94;
  expect(CalcularNota(nota)).toBe("Aprovado, sua nota é: 95");
});

test("Testa uma nota igual a 40", () => {
  var nota = 40;
  expect(CalcularNota(nota)).toBe("Aprovado, sua nota é: 40");
});

test("Testa se a nota 57 não deve ser arredondada para 60", () => {
  var nota = 57;
  expect(CalcularNota(nota)).toBe("Aprovado, sua nota é: 57");
});

test("Testa se a nota 57 não deve ser arredondada para 60", () => {
  var nota = 57;
  expect(CalcularNotaInteriro(nota)).toBe(57);
});

test("Testa se a nota 29 não deve ser arredondada para 40", () => {
  var nota = 29;
  expect(CalcularNotaInteriro(nota)).toBe(29);
});
