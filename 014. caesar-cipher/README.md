# 시저 암호

<https://programmers.co.kr/learn/courses/30/lessons/12926>

## 나의 풀이

```js
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
```

난 알고리즘에 대해 정말 잘 모르지만 이 문제는 그렇게 좋은 문제가 아닌 거 같다... `charCodeAt()`을 사용하지 않는다면 결국에는 따로 알파벳 배열을 만들어서 사용해야 하는데 이게 큰 의미가 있나 싶다.

어쨌든 총 3가지의 경우가 있는데

- 대문자일 경우
- 소문자일 경우
- 공백일 경우

3가지의 경우를 생각해서 분기를 시켜줘야 한다. 아니면 테스트 케이스를 통과하더라도 원하는 답이 나오지 않게 된다. 결국 문자를 수로 바꾸고 계산하기 때문에, 대문자 `Z`를 밀면 `b`가 나오는 경우가 생긴다. 따로 모아서 처리를 해줘야 했다.

`z`에서 1을 밀면 `a`가 나와야하기 때문에, 알파벳 전체 길이인 26을 빼주는 거로 해결했다. 문제에서는 미는 수가 1~25로 한정되어서 이렇게 해도 상관없지만, 더 정확히 하려면 26으로 나눈 나머지 `% 26` 으로 하는 게 더 정확하다.
