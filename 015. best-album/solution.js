// Programmers
// https://programmers.co.kr/learn/courses/30/lessons/42579

function solution(genres, plays) {
  const answer = [];
  const songs = genres
    .map((genre, index) => ({ genre, index, count: plays[index] }))
    .sort((a, b) => b.count - a.count);

  const freqGenres = Object.entries(
    songs.reduce((result, song) => {
      result[song["genre"]] = (result[song["genre"]] || 0) + song["count"];
      return result;
    }, {})
  )
    .sort((a, b) => b[1] - a[1])
    .map((e) => e[0]);

  freqGenres.forEach((g) =>
    answer.push(
      songs
        .filter((s) => s.genre === g)
        .map((s) => s.index)
        .slice(0, 2)
    )
  );
  return answer.flat();
}
