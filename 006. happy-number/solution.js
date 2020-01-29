const addSquares = num => {
  let sum = 0;
  String(num).split('').forEach(digit => sum += Number(digit) ** 2);
  return sum;
}

const isHappy = num => {
  const numberMap = new Map();
  let sum = addSquares(num);

  while (sum !== 1) {
    if (numberMap.get(sum) === 'cycle') {
      return false
    }
    numberMap.set(sum, 'cycle');
    sum = addSquares(sum);
  }
  return true;
}