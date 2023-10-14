const drawNumbers = prizeDraw();
console.log(drawNumbers);

function prizeDraw() {
  const numbers = [];

  while (numbers.length < 6) {
    const luckyTen = Math.floor(Math.random() * 60 + 1);
    if (!numbers.find((number) => number === luckyTen)) {
      numbers.push(luckyTen);
    }
  }
  return numbers.sort((a, b) => a - b);
}
