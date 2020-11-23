// Programmers
// https://programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
  var answer = 0;
  const temp = [];

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      const idx = moves[i] - 1;
      if (board[j][idx] === 0) continue;
      temp.push(board[j][idx]);
      board[j][idx] = 0;
      if (temp[temp.length - 2] === temp[temp.length - 1]) {
        temp.splice(-2, 2);
        answer += 2;
      }
      break;
    }
  }

  return answer;
}
