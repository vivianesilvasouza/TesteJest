import { verificaSeaFraseEpangrama } from "../models/pangrama";

test("Teste pangrama 1", () => {
  expect(
    verificaSeaFraseEpangrama(
      "We promptly judged antique ivory buckles for the next prize"
    )
  ).toBe(true);
});
test("Teste pangrama 2", () => {
  expect(
    verificaSeaFraseEpangrama("the quick brown fox jumps over the lazy dog")
  ).toBe(true);
});
test("Teste pangrama 3", () => {
  expect(verificaSeaFraseEpangrama("a")).toBe(false);
});
test("Teste pangrama 4", () => {
  expect(
    verificaSeaFraseEpangrama(
      "NOVmETKPTbYu ftZPEykhjgF GGkdGjWGwW skjPJsea dtwdqcr DERCUgxOxrRgDQbdzL IZjyXs"
    )
  ).toBe(true);
});
test("Teste pangrama 5", () => {
  expect(
    verificaSeaFraseEpangrama("qmExzBIJmdELxyOFWv LOCmefk TwPhargKSPEqSxzveiun")
  ).toBe(true);
});
