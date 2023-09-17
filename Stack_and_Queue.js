class Stack {
  constructor() {
    this.stackArray = [];
  }

  
  push(element) {
    this.stackArray.push(element);
  }

  
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty, cannot pop.";
    }
    return this.stackArray.pop();
  }

  // Check if the stack is empty
  isEmpty() {
    return this.stackArray.length === 0;
  }
}


const stack = new Stack();


stack.push(10);
stack.push(20);
stack.push(30);


console.log("Popped:", stack.pop()); 
console.log("Popped:", stack.pop()); 
console.log("Popped:", stack.pop()); 
console.log("Popped:", stack.pop()); 


stack.push(40);
console.log("Popped:", stack.pop()); 

//  creating own stack from scratch
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop(){
        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

//creating our own stack from scratch
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue(){
        if(!this.first) return null;

        var temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}




  