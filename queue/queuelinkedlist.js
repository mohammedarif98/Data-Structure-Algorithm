
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.front = null;
      this.rear = null;
      this.size = 0;
    }
  
    enqueue(data) {
      const node = new Node(data);
      if (this.front === null) {
        this.front = node;
        this.rear = node;
      } else {
        this.rear.next = node;
        this.rear = node;
      }
      this.size++;
    }
  
    dequeue() {
      if (this.front === null) {
        return null;
      } else {
        const node = this.front;
        this.front = this.front.next;
        if (this.front === null) {
          this.rear = null;
        }
        this.size--;
        return node.data;
      }
    }
  
    isEmpty() {
      return this.size === 0;
     
    }
  
    peek() {
      if (this.front === null) {
        return null;
      } else {
        return this.front.data;
      }
    }
  
    size() {
      return this.size;
    }

//! Function to reverse the queue using linked list
    reverse() {
      let prev = null;
      let current = this.front;
      let nextNode;

      while (current !== null) {
        nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
      }

      // Swap front and rear pointers
      const temp = this.front;
      this.front = this.rear;
      this.rear = temp;
    }

    print(){
    console.log("The queue:");
    while (!queue.isEmpty()) {
    const data = queue.dequeue();
    console.log(data);
        }
    }

}
  
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
// queue.dequeue();
queue.reverse()
queue.print();


console.log('----------');

// // Call the isEmpty() method
// const isEmpty = queue.isEmpty();

// // Print the result
// console.log("The queue is empty: " + isEmpty);
