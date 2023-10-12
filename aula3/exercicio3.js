/*
    Você foi convidado para desenvolver um script para realizar os sorteios
    para uma  casa de apostas (estilo mega sena). O sorteio consiste em 6 dezenas
    aleatórias, entre 1 e 60.
    Para gerar um número aleatório, pode-se utilizar o método random(), 
    da biblioteca Math: Math.round(Math.random() * 10)
*/

const drawNumbers = prizeDraw();
console.log(drawNumbers);

// função que executa o sorteio de 6 dezenas ( entre 1 e 60 )
function prizeDraw() {
  // array que vai conter a lista de números sorteados
  const numbers = [];

  // vai executar enquanto a lista não estiver completa
  while (numbers.length < 6) {
    // executa um sorteio aleatório
    const luckyTen = Math.floor(Math.random() * 60 + 1);
    // verifica se o número já foi sorteado
    alreadyDrawn = numbers.find((number) => number === luckyTen);
    // caso não tenha sido sorteado é adicionado a lista
    if (!alreadyDrawn) {
      numbers.push(luckyTen);
    }
  }
  // devolve a lista ordenada
  return numbers.sort((a, b) => a - b)
    
}
