const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
