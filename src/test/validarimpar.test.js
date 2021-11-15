const { validaimparpar } = require("../models/validaimparpar");

test("Testa se 3 é impar", () => {
  expect(validaimparpar(3)).toBe("impar");
});

test("Testa se 4 é par", () => {
  expect(validaimparpar(4)).toBe("par");
});
