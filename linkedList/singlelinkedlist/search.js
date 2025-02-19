
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
  
    search(target) {
      let current = this.head;
      while (current) {
        if (current.value === target) {
          return true; // Found the target element
        }
        current = current.next;
      }
      return false; // Target element not found
    }

    display(){
      let current = this.head;
      while(current!==null){
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
  
  console.log("Linked List:");
  myLinkedList.display();
  
  console.log("Searching for 30:", myLinkedList.search(30));
  console.log("Searching for 50:", myLinkedList.search(50));
  