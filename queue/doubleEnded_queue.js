

class Deque {
    constructor() {
      this.items = [];
    }
  
    // Add an element to the front of the deque
    addFront(element) {
      this.items.unshift(element);
    }
  
    // Add an element to the rear of the deque
    addRear(element) {
      this.items.push(element);
    }
  
    // Remove and return the front element of the deque
    removeFront() {
      if (this.isEmpty()) {
        return "Deque is empty";
      }
      return this.items.shift();
    }
  
    // Remove and return the rear element of the deque
    removeRear() {
      if (this.isEmpty()) {
        return "Deque is empty";
      }
      return this.items.pop();
    }
  
    // Get the front element of the deque without removing it
    getFront() {
      if (this.isEmpty()) {
        return "Deque is empty";
      }
      return this.items[0];
    }
  
    // Get the rear element of the deque without removing it
    getRear() {
      if (this.isEmpty()) {
        return "Deque is empty";
      }
      return this.items[this.items.length - 1];
    }
  
    // Check if the deque is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get the size of the deque
    size() {
      return this.items.length;
    }
  
    // Clear the deque
    clear() {
      this.items = [];
    }
  }
  
  // Example usage:
  const deque = new Deque();
  deque.addFront(1);
  deque.addRear(2);
  deque.addFront(3);
  deque.addRear(4);
  
  console.log(deque.getFront()); // Output: 3
  console.log(deque.getRear());  // Output: 4
  
  deque.removeFront();
  deque.removeRear();
  
  console.log(deque.getFront()); // Output: 1
  console.log(deque.getRear());  // Output: 2
  
  console.log(deque.size());     // Output: 2
  
  deque.clear();
  console.log(deque.isEmpty());  // Output: true
  


//! ====================================================



// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null
//     }
// }

// class dQueue{
//     constructor(){
//         this.front = null;
//         this.rear = null;
//         this.size = 0;
//     }

//     addFront(data){
//         let newnode = new Node(data);
    
//         if(this.front===null){
//             this.front = newnode;
//             this.rear = newnode;
//         }else{
//             newnode.next = this.front;
//             this.front = newnode;
//         }
//         this.size++
//     }

//     addBack(data){
//         let newnode = new Node(data);
//         if(this.front===null){
//             this.front = newnode;
//             this.rear = newnode;
//         }else{
//             this.rear.next = newnode;
//             this.rear = newnode;
//         }
//         this.size++;
//     }

//     delFront(){
//         let current = this.front.data;
//         this.front = this.front.next;
//         return current;
//     }

//    delBack(){
        
//         let current = this.front;
//         let prev = null;
//         while (current.next!== null) {
//             prev = current;
//             current = current.next;
//         }
//         const rear_data = current.data;
//         prev.next = null;
//         this.rear = prev;
//         return rear_data;
//     }
    
//     print(){
//         let current = this.front;
//         while(current!==null){
//             console.log(current.data);
//             current = current.next;
//         }
//     }
// }

// let dql = new dQueue()

// dql.addFront(1)
// dql.addBack(11)
// dql.addFront(2)
// dql.addBack(22)
// dql.addFront(3)
// dql.addBack(33)
// dql.print()
// console.log('-------');
// dql.delFront()
// dql.delBack()
// dql.print()

// //! double ended queue implementtion in array

// class Dqueue{
//     constructor(){
//         this.items=[]
//     }

//     addFront(ele){
//         this.items.push(ele);
//     }

//     addBack(ele){
//         this.items.unshift(ele);
//     }

//     delFont(){
//         return this.items.shift();
//     }

//     delBack(){
//         return this.items.pop();
//     }

//     print(){
//         return this.items
//     }
// }

// let dq = new Dqueue();

// dq.addFront(1)
// dq.addBack(11)
// dq.addFront(2)
// dq.addBack(22)
// dq.addFront(3)
// dq.addBack(33)
// dq.delFont()
// dq.delBack()
// console.log(dq.print());
