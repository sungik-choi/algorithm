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

  preOrder(node) {
    if (node !== null) {
      console.log(node.data);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  inOrder(node) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.data);
      this.inOrder(node.right);
    }
  }

  postOrder(node) {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.data);
    }
  }
}

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
    this.t.inOrder(this.t.getRoot());
  }
}

const test = new Test();
test.run();
