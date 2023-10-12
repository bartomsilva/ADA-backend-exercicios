/*
    Crie um algoritmo usando o for que leia uma lista.
    Retorne duas novas listas, uma contendo apenas os números 
    pares e outra, os ìmpares.
    Esta lista deve ser assim: [1, 2, 3, 4, 5, 6, 7, 8, 9];

    Lista -> [1,2,3,4,5,6,7,8,9]
    [2, 4, 6, 8] -> pares
    [1, 3, 5, 7, 9] -> impares
*/

// lista de números
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// função que separa os números pares dos números impares
const separateNumbers = (list) => {
  const numbersOdd = [];
  const numbersPair = [];

  for (const number of list) {
    if (number % 2 === 0) {
      numbersPair.push(number);
    } else {
      numbersOdd.push(number);
    }
  }  
  return { numbersPair, numbersOdd };
};

const { numbersPair, numbersOdd } = separateNumbers(list);

console.log(`
 considerando a lista:
    [${list}]

 os números pares são:
    [${numbersPair}]

 os números ímpares são:
    [${numbersOdd}]
`);
