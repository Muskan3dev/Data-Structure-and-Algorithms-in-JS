//Creating stack with array
class Stack {
  constructor() {
    this.stackArray = [];
  }

  // Push an element onto the stack
  push(element) {
    this.stackArray.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty, cannot pop.";
    }
    return this.stackArray.pop();
  }

  isEmpty() {
    return this.stackArray.length === 0;
  }
}

const stack = new Stack();

// Push elements onto the stack
stack.push(10);
stack.push(20);
stack.push(30);

// Pop elements from the stack
console.log("Popped:", stack.pop());
console.log("Popped:", stack.pop());
console.log("Popped:", stack.pop());
console.log("Popped:", stack.pop());

stack.push(40);
console.log("Popped:", stack.pop());

//creating our own stack from scratch
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
