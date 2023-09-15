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
  