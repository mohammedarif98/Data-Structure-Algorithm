class Stack {
    constructor() {
      this.queue1 = [];
      this.queue2 = [];
    }
    push(element) {
      this.queue1.push(element);
    }
    pop() {
      if (this.queue1.length === 0) {
        return "Stack is empty";
      }
      while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift());
      }
      const poppedElement = this.queue1.shift();
      while (this.queue2.length > 0) {
        this.queue1.push(this.queue2.shift());
      }
      return poppedElement;
    }
    peek() {
      if (this.queue1.length === 0) {
        return "Stack is empty";
      }
      while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift());
      }
      const topElement = this.queue1[0];
      while (this.queue2.length > 0) {
        this.queue1.push(this.queue2.shift());
      }
      return topElement;
    }
}
  // Example usage:
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3); 
  console.log(stack.peek()); // Output: 3
  console.log(stack.pop()); // Output: 3
  console.log(stack.pop()); // Output: 2
  console.log(stack.pop()); // Output: 1
  
