// Programmers
// https://programmers.co.kr/learn/courses/30/lessons/12940

function solution(n, m) {
  var answer = [];
  const maxNum = Math.max(n, m);
  const minNum = Math.min(n, m);
  answer[0] = gcd(minNum, maxNum);
  answer[1] = lcm(minNum, maxNum);
  return answer;
}

function gcd(a, b) {
  const r = a % b;
  return r === 0 ? b : gcd(b, r);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
