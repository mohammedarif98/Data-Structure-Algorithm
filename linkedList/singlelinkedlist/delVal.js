
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
class LinkedList {
  constructor() {
    this.head = null;
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
  
    // Delete a node with the given value from the linked list
    delete(value) {
      // if (this.head === null) {
      //   return;
      // }
      // Handle deletion if the node to be deleted is the head node
      if (this.head.value === value) {
        this.head = this.head.next;
        // return;
      }else{
      let current = this.head;
      let previous = null;
      while (current !== null) {
        if (current.value === value) {
          previous.next = current.next;
          return;
        }
        previous = current;
        current = current.next;
      }
    }
    }
  
    // Display the elements of the linked list
    display() {
      let current = this.head;
      while (current !== null) {
        console.log(current.value);
        current = current.next;
      }
    }
  }
  
  // Usage:
  const linkedList = new LinkedList();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(38);
  linkedList.append(4);
  
  console.log("Before deletion:");
  linkedList.display();
  
  linkedList.delete(38);
  
  console.log("After deletion:");
  linkedList.display();
  