# 같은 숫자는 싫어

## 나의 풀이

```JavaScript
function solution(arr) {
  const answer = [arr[0]];
  for (let index = 1; index < arr.length; index++) {
    if (arr[index] !== arr[index - 1]) answer.push(arr[index]);
  }
  return answer;
}
```

고차함수를 썼어야 했는데.

## 다른 사람 풀이

```JavaScript
function solution(arr)
{
    return arr.filter((val,index) => val != arr[index+1]);
}
```

나의 경우 index+1을 하면 에러가 발생했는데, filter 메서드에서는 발생을 안했음.
