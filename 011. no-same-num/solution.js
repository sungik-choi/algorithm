function solution(arr) {
  const answer = [arr[0]];
  for (let index = 1; index < arr.length; index++) {
    if (arr[index] !== arr[index - 1]) answer.push(arr[index]);
  }
  return answer;
}
