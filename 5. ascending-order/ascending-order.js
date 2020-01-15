// 문제
// N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 수의 개수 N(1 ≤ N ≤ 10,000,000)이 주어진다. 둘째 줄부터 N개의 줄에는 숫자가 주어진다. 이 수는 10,000보다 작거나 같은 자연수이다.

// 출력
// 첫째 줄부터 N개의 줄에 오름차순으로 정렬한 결과를 한 줄에 하나씩 출력한다.

//
//  ascending-order.js
//  baekjoon, 10989
//
//  Created by Sungik-Choi on 2020/01/15.
//

function insertionSort(arr, index) {
  const keyIndex = index;
  const targetIndex = index - 1;
  const key = arr[keyIndex];
  const target = arr[targetIndex];
  if (key - target < 0) {
    arr.splice(targetIndex, 2, key, target);
    return arr;
  }
}

function solution(num) {
  const arr = num.split('/n');
  return insertionSort(arr, 1);
}

console.log(solution('10/n6/n5/n1/n8/n4/n3/n9/n2/n7/n10'));
