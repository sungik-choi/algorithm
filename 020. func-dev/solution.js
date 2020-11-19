// Programmers
// https://programmers.co.kr/learn/courses/30/lessons/42586

function solution(progresses, speeds) {
  var answer = [];

  while (progresses.length !== 0) {
    let deployCount = 0;
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
      if (progresses[0] >= 100) {
        progresses.shift();
        speeds.shift();
        deployCount++;
        i = -1;
      }
    }
    if (deployCount > 0) answer.push(deployCount);
  }

  return answer;
}

// 다른 풀이
// 나도 처음에 시도했으나, 시간이 부족할까봐 위의 방법으로 풀이했다.

function solution(progresses, speeds) {
  const answer = [0];
  const day = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));
  const maxDay = day[0];

  for (let i = 0, j = 0; i < day.length; i++) {
    if (day[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = day[i];
      answer[++j] = 1;
    }
  }
}

/*

예시: day: [7, 10, 3, 2]

1. i = 0, 처음 반복문에 들어가면 answer[j]에 1 추가 (day[0] === maxDay 이므로 if문) 
2. i = 1, 10이 더 크므로 10이 맥스가되고, else문에 들어가 j 증가되며 다음 배포 1추가, answer = [1, 1])
3. i = 2, i = 3, 전부 10보다 작으므로 if 문 내부 실행, answer = [1, 3]

*/
