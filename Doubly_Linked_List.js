//Doubly Linked List
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
    }
  }
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
  //push() method
  push(value){
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }    

  //pop() method
  pop() {
    if (!this.head){
     return undefined;
    }
    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

//Insert() method
insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    const newNode = new Node(value);
    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;

    newNode.next = afterNode;
    afterNode.prev = newNode;

    this.length++;
    return true;
  }

  //Adding Remove() Method
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const removedNode = this.get(index);
    const beforeNode = removedNode.prev;
    const afterNode = removedNode.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;

    removedNode.prev = null;
    removedNode.next = null;
    this.length--;
    return removedNode;
  }

  }

  const doublyLinkedList = new DoublyLinkedList();
  doublyLinkedList.push(10);
  doublyLinkedList.push(20);
  doublyLinkedList.push(30);
  
  console.log("Doubly Linked List:", doublyLinkedList);
  console.log("Popped Node:", doublyLinkedList.pop());
  console.log("Doubly Linked List after pop:", doublyLinkedList);
  console.log("Removed Node at Index 1:", doublyLinkedList.remove(1));



  