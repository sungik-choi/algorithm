// Programmers
// https://programmers.co.kr/skill_checks/209426/submissions/8067186?challengeable_type=ChallengeAlgorithm

function solution(cacheSize, cities) {
  var answer = 0;
  const cache = [];

  if (cacheSize === 0) return cities.length * 5;

  cities.forEach((c) => {
    const city = c.toLowerCase();

    if (cache.indexOf(city) !== -1) {
      answer += 1;
      cache.splice(cache.indexOf(city), 1);
      cache.push(city);
    } else {
      if (cache.length < cacheSize) {
        cache.push(city);
      } else {
        cache.shift();
        cache.push(city);
      }
      answer += 5;
    }
  });

  return answer;
}
