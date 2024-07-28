class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
class LinkedListStack {
constructor() {
    this.top = null;
}
  
    isEmpty() {
      return this.top === null;
    }
  
    push(data) {
      const newNode = new Node(data);
      newNode.next = this.top;
      this.top = newNode;
    }
  
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      const data = this.top.data;
      this.top = this.top.next;
      return data;
    }
  
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.top.data;
    }
  
    // Other methods like display, size, etc. can be added if needed
  
    deleteFirst() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      this.top = this.top.next;
    }
  
    deleteLast() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      if (this.top.next === null) {
        // If there is only one element in the stack, delete it
        this.top = null;
      } else {
        let current = this.top;
        let prev = null;
  
        while (current.next !== null) {
          prev = current;
          current = current.next;
        }
  
        prev.next = null;
      }
    }
    print(){
      let current = this.top;
      while(current){
        console.log(current.data);
        current = current.next
      }
    }
}

  const stack = new LinkedListStack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);

// console.log(stack.peek()); // Output: 50

stack.deleteFirst();
// console.log(stack.peek()); // Output: 40

// stack.deleteLast();
// console.log(stack.peek()); // Output: 40
stack.print()