/* Pangramas são frases que contem todas as letras do alfabeto.
Construa um algoritmo que receba como parametro uma frase e retorne se esta frase e um pangrama ou não.

Frases:

the quick brown fox jumps over the lazy dog

We promptly judged antique ivory buckles for the next prize

We promptly judged antique ivory buckles for the prize

a

qmExzBIJmdELxyOFWv LOCmefk TwPhargKSPEqSxzveiun

NOVmETKPTbYu ftZPEykhjgF GGkdGjWGwW skjPJsea dtwdqcr DERCUgxOxrRgDQbdzL IZjyXs */

function verificaSeaFraseEpangrama(frase: string): boolean {
  let alfa = "abcdefghijklmnnopqrstuvwxyz";
  for (let index = 0; index < alfa.length; index++) {
    const letraAlfa = alfa[index];
    if (frase.toLowerCase().indexOf(letraAlfa) === -1) {
      return false;
    }
  }
  return true;
}

export { verificaSeaFraseEpangrama };
