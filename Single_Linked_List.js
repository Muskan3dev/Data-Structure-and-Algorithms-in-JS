//Single Linked List
//Creating Node 
class Node{
    constructur(val){
        this.val=val;
        this.next=null;
    }
}
class SingleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

push(val){
    const newNode = new Node(val);

    if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        this.tail.next = newNode;
        this.tail = newNode;
    }

    this.length++;
    return this;
    }
    
pop()
{
    if(!this.head) {
        return undefined;
    }

    let current = this.head;
    let newTail = current;

    while (current.next) {
        newTail = current;
        current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
        this.head = null;
        this.tail = null;
    }

    return current;
}
//performing shift operation  
shift(){
    if(!this.head)
    return undefined;
    let currentHead=this.head;
    this.head=currentHead.next;
    this.length--;
    if(this.length===0){
        this.tail=null;
    }
return currentHead;
}
//performing Unshift operation 
unshift(val){
    let newNode=new Node(val);
    if(!this.head){
        this.head=newNode;
        this.tail=this.head;
    }
    else{
        newNode.next=this.head;
        this.head=newNode;
    }
    this.length++;
    return this;
}
}
// Create a new singly linked list
const list = new SingleLinkedList();

// Push elements to the list
list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.push(50);

// Display the list elements
console.log("Singly Linked List elements:");
console.log(list);

// Pop an element from the end
const popped = list.pop();
console.log("Popped:", popped.value);
console.log(list);

//Shifting 
const shifted = list.shift();
console.log("Shifted:", shifted.value);
console.log(list);

//unshift
list.unshift(50);
console.log("After unshifting 50:", list);
