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
