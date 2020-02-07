function calculateMonth(month, day) {
  let answer = 0;
  if (month >= 1) answer += 31;
  if (month >= 2) answer += 29;
  if (month >= 3) answer += 31;
  if (month >= 4) answer += 30;
  if (month >= 5) answer += 31;
  if (month >= 6) answer += 30;
  if (month >= 7) answer += 31;
  if (month >= 8) answer += 31;
  if (month >= 9) answer += 30;
  if (month >= 10) answer += 31;
  if (month >= 11) answer += 30;
  if (month >= 12) answer += 31;
  return answer;
}

function calculateDay(day) {
  const dayofweek = day % 7;
  let answer = "";
  switch (dayofweek) {
    case 0:
      answer = "THU";
      break;
    case 1:
      answer = "FRI";
      break;
    case 2:
      answer = "SAT";
      break;
    case 3:
      answer = "SUN";
      break;
    case 4:
      answer = "MON";
      break;
    case 5:
      answer = "TUE";
      break;
    case 6:
      answer = "WED";
      break;
    default:
      break;
  }
  return answer;
}

function solution(month, day) {
  let answer = 0;
  answer = calculateMonth(month) + (day - 1);
  return answer;
}

console.log(solution(1, 2));
