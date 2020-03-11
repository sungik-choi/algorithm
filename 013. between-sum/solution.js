function solution(a, b) {
  let answer = 0;
  let smallNum;
  let bigNum;
  if (a === b) return a;
  if (a > b) {
    smallNum = b;
    bigNum = a;
  } else if (a < b) {
    smallNum = a;
    bigNum = b;
  }
  for (let i = smallNum; i <= bigNum; i += 1) {
    answer += i;
  }
  return answer;
}
