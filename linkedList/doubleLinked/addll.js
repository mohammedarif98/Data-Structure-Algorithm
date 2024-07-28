class Node {
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
    append(value) {
      const newNode = new Node(value);
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
    prepend(value) {
      const newNode = new Node(value);
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
    }

    print(){
        let current = this.head;
        while(current){
            console.log(current.value);
            current = current.next;
        }
    }
  }
  
  // Example usage
  const linkedList = new DoublyLinkedList();
  // linkedList.prepend(1);
  // linkedList.prepend(2);
  // linkedList.prepend(3);
  // linkedList.prepend(5);
  // linkedList.print()

  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  linkedList.append(5);
  linkedList.print()
  