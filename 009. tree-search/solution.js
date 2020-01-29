class Node {
  constructor(data, nodeMap) {
    this.data = data;
    this.left = nodeMap.get(data)[0] === '.' ? null : nodeMap.get(data)[0];
    this.right = nodeMap.get(data)[1] === '.' ? null : nodeMap.get(data)[1];
  }
}

class Tree {
  constructor() {
    this.root = null;
    this.nodeMap = new Map();
    this.orderStr = '';
  }

  setRoot(data) {
    this.root = new Node(data, this.nodeMap);
  }

  getRoot() {
    return this.root;
  }

  makeNode(data) {
    return data === null ? null : new Node(data, this.nodeMap);
  }

  inOrder(node) {
    if (node !== null) {
      this.inOrder(this.makeNode(node.left));
      this.orderStr += node.data;
      this.inOrder(this.makeNode(node.right));
    }
  }

  preOrder(node) {
    if (node !== null) {
      this.orderStr += node.data;
      this.preOrder(this.makeNode(node.left));
      this.preOrder(this.makeNode(node.right));
    }
  }

  postOrder(node) {
    if (node !== null) {
      this.postOrder(this.makeNode(node.left));
      this.postOrder(this.makeNode(node.right));
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

const printSolution = arr => {
  const t = new Tree();
  for (let index = 0; index < arr.length; index++) {
    const data = arr[index].split(' ')[0];
    const left = arr[index].split(' ')[1];
    const right = arr[index].split(' ')[2];
    t.nodeMap.set(data, [left, right]);
  }

  // console.log
  t.setRoot('A');
  t.preOrder(t.getRoot());
  t.print();
  t.inOrder(t.getRoot());
  t.print();
  t.postOrder(t.getRoot());
  t.print();
};

rl.on('line', input => {
  inputs.push(input);
  if (count === 0) testcaseNum = Number(inputs.shift());
  if (testcaseNum === count) rl.close();
  count++;
}).on('close', () => {
  // printSolution
  printSolution(inputs);
  process.exit();
});
