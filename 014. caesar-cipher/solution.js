function solution(s, n) {
  const alphabets = [...s];
  const offset = n;
  const answer = alphabets.reduce((word, alphabet) => {
    let alphabetNum = alphabet.charCodeAt();
    if (alphabetNum !== " ".charCodeAt()) {
      if (alphabetNum >= "A".charCodeAt() && alphabetNum <= "Z".charCodeAt()) {
        if (alphabetNum + offset > "Z".charCodeAt()) {
          alphabetNum = alphabetNum + offset - 26;
        } else alphabetNum += offset;
      } else if (alphabetNum + offset > "z".charCodeAt()) {
        alphabetNum = alphabetNum + offset - 26;
      } else alphabetNum += offset;
    }
    word += String.fromCharCode(alphabetNum);
    return word;
  }, "");
  return answer;
}
