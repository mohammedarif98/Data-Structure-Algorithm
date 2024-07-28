class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
  
    append(value){                            //* adding an element or node at the end of a data structure.                          
      const newnode = new Node(value);
      if(this.head === null){
          this.head = newnode;
          this.tail = newnode;
      }else{
          this.tail.next = newnode;
          this.tail = newnode
      }
      this.size++;
  }
  
    deleteLast() {
      if (this.head===null) {
        return; // Empty list
      }
      // If there's only one element in the list
      if (this.head.next===null) {
        this.head = null;
        return;
      }
      let current = this.head;
      while (current.next.next) {
        current = current.next;
      }
      current.next = null;
    }
  
    display() {
        let current = this.head;
        while (current !== null) {
          console.log(current.value);
          current = current.next;
        }
      }

  }
  
  // Example usage:
  const myLinkedList = new LinkedList();
  myLinkedList.append(10);
  myLinkedList.append(20);
  myLinkedList.append(30);
  myLinkedList.append(40);
  
  console.log("Before deletion:");
  myLinkedList.display();
  
  myLinkedList.deleteLast();
  
  console.log("After deletion:");
  myLinkedList.display();
  