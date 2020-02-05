function solution(s) {
  let center;
  if (s.length % 2 === 1) {
    center = Math.floor(s.length / 2);
    return s[center];
  }
  center = s.length / 2;
  return s[center - 1] + s[center];
}
