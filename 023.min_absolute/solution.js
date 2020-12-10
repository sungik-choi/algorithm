// HackerRank
// https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms

function minimumAbsoluteDifference(arr) {
  let diff = Math.abs(arr[0] - arr[1]);
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const currDiff = Math.abs(arr[i] - arr[j]);
      diff = Math.min(currDiff, diff);
      if (diff === 0) break;
    }
  }
  return diff;
}
