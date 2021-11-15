/* Calcular nota final

O objetivo desta atividade e desenvolver um algoritmo que calcule a nota final do aluno, porém, 
deve seguir as seguintes regras:
- As notas vao de 0 a 100.
- Se a diferença entre a nota do aluno e o proximo multiplo de 5 em relação a nota for menor do que 3, 
a nota deve ser arredondada para o proximo multiplo de 5
- Qualquer nota menor que 40 e considerado reprovação
- A regra de arredondamento não se aplica as notas reprovadas

Exemplos: 
- Se a nota for igual a 84 ela deve ser arredondada para 85 (85 - 84 e menor que 3)
- Se a nota for 29 a regra de arredondamento não se aplica pois esta abaixo de 40
- Se a nota for 57 não deve ser arredondado (60 - 57 não e menor do que 3)

Deve ser criado uma função que receba como parametro a nota inicial do aluno e retorne a nota 
final sendo ela arredondada ou não. */

function CalcularNotaInteriro(nota: number) {
  if (nota <= 0 || nota >= 100) {
    return nota;
  }

  var notaFinal = nota;
  if (nota > 40) {
    for (let mult = nota; mult < nota + 100; mult++) {
      if (mult % 5 === 0) {
        if (mult - nota < 3) {
          notaFinal = mult;
        }
        break;
      }
    }
  }
  return notaFinal;
}

function CalcularNota(nota: number) {
  if (nota < 0 || nota > 100) {
    return `Nota: ${nota} é inválida!`;
  }

  var notaFinal = nota;
  if (nota > 40) {
    for (let mult = nota; mult < nota + 100; mult++) {
      if (mult % 5 === 0) {
        if (mult - nota < 3) {
          notaFinal = mult;
        }
        break;
      }
    }
  }

  if (notaFinal >= 40) {
    return `Aprovado, sua nota é: ${notaFinal}`;
  } else {
    return `Reprovado, sua nota é: ${notaFinal}`;
  }
}

export { CalcularNota, CalcularNotaInteriro };
