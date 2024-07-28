class Queue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }
    enqueue(x) {
        this.stack1.push(x);
    }
    dequeue() {
        if (this.stack2.length === 0) {
            while (this.stack1.length) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }
    peek() {
        if (this.stack2.length === 0) {
            while (this.stack1.length) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2[0];
    }
    empty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }
}
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.peek()); // 1
console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 2
console.log(queue.dequeue()); // 3
console.log(queue.empty()); // true
