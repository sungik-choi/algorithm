function add(arr) {
  const array = arr;
  const size = arr.length - 1;
  const maxNum = arr[size];
  const targetNum = arr[size - 1];
  console.log(arr);
  if (targetNum + 1 >= maxNum) {
    return array.reduce((acc, cur) => {
      return acc + cur;
    });
  }
  array.splice(size, 0, targetNum + 1);
  return add(array);
}

function solution(a, b) {
  if (a === b) return a;
  const arr = [a, b].sort((a, b) => {
    return a - b;
  });
  return add(arr);
}

console.log(solution(1000000, -1000000));
