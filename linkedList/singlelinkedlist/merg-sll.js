


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
    this.size = 0
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
  
    display() {
      let current = this.head;
      while (current !== null) {
        console.log(current.value);
        current = current.next;
      }
    }
  
    merge(mergeList) {
      if (this.head===null) {
        this.head = mergeList.head;
        return;
      }
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = mergeList.head;
    }
}
  
  // Example usage:
  const list1 = new LinkedList();
  list1.append(10);
  list1.append(20);
  list1.append(30);
  
  const list2 = new LinkedList();
  list2.append(40);
  list2.append(50);
  list2.append(60);
  
  console.log("List 1:");
  list1.display();
  
  console.log("List 2:");
  list2.display();
  
  list1.merge(list2);
  
  console.log("Merged List:");
  list1.display();
  