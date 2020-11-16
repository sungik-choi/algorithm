// Programmers
// https://programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % divisor > 0) arr.splice(i, 1);
  }
  arr.length > 0 ? arr.sort((a, b) => a - b) : arr.push(-1);
  return arr;
}
