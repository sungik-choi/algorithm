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
    this.nodeArr = [];
    this.orderStr = '';
  }

  setRoot(node) {
    this.root = node;
  }

  getRoot() {
    return this.root;
  }

  makeNode(data, left, right) {
    if (left === '.') left = null;
    if (right === '.') right = null;
    return new Node(data, left, right);
  }

  inOrder(node) {
    if (node !== null) {
      this.inOrder(node.left);
      this.orderStr += node.data;
      this.inOrder(node.right);
    }
  }

  preOrder(node) {
    if (node !== null) {
      this.orderStr += node.data;
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  postOrder(node) {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      this.orderStr += node.data;
    }
  }

  print() {
    console.log(this.orderStr);
    this.orderStr = '';
  }
}

// Input & output
let testcaseNum;
let count = 0;
const inputs = [];
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// solve
const solve = arr => {
  const t = new Tree();
  for (let index = 0; index < arr.length; index++) {
    const data = arr[index].split(' ')[0];
    const left = arr[index].split(' ')[1];
    const right = arr[index].split(' ')[2];
    t.nodeArr.push(t.makeNode(data, left, right));
  }
  console.log(t.nodeArr);
};

rl.on('line', input => {
  inputs.push(input);
  if (count === 0) testcaseNum = Number(inputs.shift());
  if (testcaseNum === count) rl.close();
  count++;
}).on('close', () => {
  // solve
  solve(inputs);
  process.exit();
});

//   test() {
//     this.t.setRoot(this.nA);
//     this.t.preOrder(this.t.getRoot())
//     this.t.print();
//     this.t.inOrder(this.t.getRoot());
//     this.t.print();
//     this.t.postOrder(this.t.getRoot());
//     this.t.print();
//   }
// }

// const test = new Test();
// test.test();
