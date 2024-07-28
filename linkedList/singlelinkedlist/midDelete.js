class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class SinglyLinkedList {
    constructor() {
      this.head = null;
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
  
    // midElement(){
    //   let slow = this.head;
    //   let fast = this.head;
    //   while(fast!=null&&fast.next!=null){
    //       slow = slow.next;
    //       fast = fast.next.next;
    //   }
    //   console.log(slow.value);
    // }
  
    deleteMiddle() {
      if (this.head === null) {
        return;
      }
      let slow = this.head;
      let fast = this.head;
      let prev = null;
      while (fast !== null && fast.next !== null) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
      }
      if (prev === null) {
        this.head = slow.next;
      } else {
        prev.next = slow.next;
      }
      this.size--;
    }
    
    print() {
      let current = this.head;
      while (current !== null) {
        console.log(current.value);
        current = current.next;
      }
    }
  }
  
  // Example usage
  const linkedList = new SinglyLinkedList();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(22);
  linkedList.append(3);
  linkedList.append(4);
  linkedList.print()
  
  console.log("--------");
  //* =====deleted node -------------

  // linkedList.midElement();
  linkedList.deleteMiddle();
  
  linkedList.print()