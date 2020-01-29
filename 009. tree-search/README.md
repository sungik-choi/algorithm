# 이진 트리

## 이진 트리 탐색 구현

```JavaScript
class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  setRoot(node) {
    this.root = node;
  }

  getRoot() {
    return this.root;
  }

  makeNode(data, left, right) {
    return new Node(data, left, right);
  }

  // 현재 노드 -> 왼쪽 자식 노드 -> 오른쪽 자식 노드 순으로 탐색
  preOrder(node) {
    if (node !== null) {
      console.log(node.data);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  // 왼쪽 자식 노드 -> 현재 노드 -> 오른쪽 자식 노드 순으로 탐색
  inOrder(node) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.data);
      this.inOrder(node.right);
    }
  }

  // 왼쪽 자식 노드 -> 오른쪽 자식 노드 -> 현재 노드 순으로 탐색
  postOrder(node) {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.data);
    }
  }
}

// Make binary-tree
//
//        (4)
//        / \
//     (2) (5)
//     / \
//   (1) (3)

class Test {
  constructor() {
    this.t = new Tree();
    this.n1 = this.t.makeNode(1, null, null);
    this.n3 = this.t.makeNode(3, null, null);
    this.n5 = this.t.makeNode(5, null, null);
    this.n2 = this.t.makeNode(2, this.n1, this.n3);
    this.n4 = this.t.makeNode(4, this.n2, this.n5);
  }

  run() {
    this.t.setRoot(this.n4);
    this.t.preOrder(this.t.getRoot());
  }
}

const test = new Test();
test.run();
```

## 재귀 함수 이해하기

```
        (4)
        / \
      (2) (5)
      / \
    (1) (3)
```

트리를 타고 들어가는 부분이 처음에 직관적으로이해가 잘 안됐다. 디버그해보고 일일히 손으로 따라가다 보니 이해가 됐다.풀어서 설명하자면,  
In-order 를 기준으로,

```JavaScript
inOrder(node) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.data);
      this.inOrder(node.right);
    }
  }
```

1. `this.t.inOrder(this.t.getRoot());` 현재 루트는 4번이므로 4번부터 시작한다.

2. `left` 로 들어간다. 다시 inOrder 2번을 시작한다. **처음 4번으로 시작한 함수는 현재 스택에 쌓인 채로 1번 행(inOrder(node.left))에서 멈춰있는 상태다.**

3. 2번의 left에 1번이 존재한다. 다시 1번으로 간다. **이때도 2번으로 시작한 함수또한 1번행에 멈춰있는 상태다.**

4. 1번의 left를 확인한다. null이므로 함수는 호출되자마자 바로 종료된다. **console.log를 실행, 1이 출력된다.** right도 없다. 바로 종료되고 함수는 끝난다.

5. **다시 2번 함수로 돌아간다. console.log가 실행되고 2가 출력된다.** right는 3이다. right로 넘어간다.

6. 3의 left가 없다. 3이 출력되고, right가 없는걸 확인한다.

7. **2번 함수까지 모두 종료되고, 쌓여있던 처음의 4번 루트 함수로 넘어간다.** 4번이 console.log로 출력된다. right를 확인한다. 5로 이동한다.

8. 5의 left가 없다. console.log로 5를 출력, right가 없으므로 종료된다.

9. 모든 inOrder 함수가 스택에서 사라지며 종료된다. `1,2,3,4,5` 가 차례대로 한 줄씩 띄어진 채로 출력된다.

---
