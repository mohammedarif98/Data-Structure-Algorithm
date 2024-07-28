
class Node{
  constructor(data){
      this.data = data;
      this.next = null;
  }
}

class Stack{
  constructor(){
    this.top = null;
  }

  push(data){
    const newnode = new Node(data);
    newnode.next = this.top;
    this.top = newnode;
  }

  pop(){
    if(this.top == null){
      return null
    }
    const current = this.top.data;
    this.top = this.top.next;
    return current;
  }

  peek(){
    return this.top ? this.top.data : null;
  }

  isEmpty(){
    return this.top === null
  }

  size(){
    let counter = 0;
    let current = this.top;
    while(current!==null){
      counter++;
      current = current.next;
    }
    return counter;
  }

  search(target){
    let current = this.top;
    while(current){
      if(target === current.data){
        return "found"
      }
      current = current.next;
    }
    return "not found";
  }

  sum(){
    let total = 0;
    let current = this.top;
    while(current){
      total+=current.data;
      current = current.next;
    }
    return total;
  }

  // middleElement(){                       //! delete second last element 
  //   if(!this.top || !this.top.next){
  //     return false;
  //   }
  //   let slow = this.top;
  //   let fast = this.top;
  //   while(fast.next && fast.next.next){
  //     slow = slow.next;
  //     fast = fast.next.next;
  //   }
  //   const middleNode = slow.next;
  //   slow.next = middleNode.next;
  //   middleNode.next = null
  // }
  
  middleDelete() {
    if (!this.top || !this.top.next) {
      return false; // Stack is empty or has only one element, no second last node to delete
    }
    let slow = this.top;
    let fast = this.top;
    let prev = null;
    while (fast.next && fast.next.next) {
      prev = slow;
      slow = slow.next;
      fast = fast.next.next;
    }
    if (prev) {
      prev.next = slow.next;
    } else {
      // If prev is null, it means we are deleting the first element (top) of the stack
      this.top = slow.next;
    }
    slow.next = null;
    return true; // Successfully deleted the second last node
  }

  print(){
    let current = this.top;
    while(current){
      console.log(current.data);
      current = current.next
    }
  }

}

const stackLL = new Stack();

stackLL.push(1)
stackLL.push(2)
stackLL.push(3)
stackLL.push(4)
stackLL.push(5)
stackLL.push(6)

stackLL.print()
// console.log('-----total------');
// console.log(stackLL.sum());
console.log('-----after poping-----');
stackLL.pop()
stackLL.print()
// console.log('-----topmost element-----');
// console.log(stackLL.peek());
// stackLL.print
// console.log('---------size-------');
// console.log(stackLL.size());
// console.log('-----search-----');
// console.log(stackLL.search(32));
console.log('-----middle delete-----');
stackLL.middleDelete()
stackLL.print()











  












// class Node {
//     constructor(data) {
//       this.data = data;
//       this.next = null;
//     }
//   }
  
//   class Stack {
//     constructor() {
//       this.top = null;
//       this.size = 0;
//     }
  
//     push(element) {
//       const newNode = new Node(element);
//       if (this.isEmpty()) {
//         this.top = newNode;
//       } else {
//         newNode.next = this.top;
//         this.top = newNode;
//       }
//       this.size++;
//     }
  
//     pop() {
//       if (this.isEmpty()) {
//         return "Stack is empty";
//       }
//       const poppedNode = this.top;
//       this.top = poppedNode.next;
//       this.size--;
//       return poppedNode.data;
//     }
  
//     peek() {
//       if (this.isEmpty()) {
//         return "Stack is empty";
//       }
//       return this.top.data;
//     }
  
//     isEmpty() {
//       return this.size === 0;
//     }
  
//     getSize() {
//       return this.size;
//     }
  
//     clear() {
//       this.top = null;
//       this.size = 0;
//     }

//     display(){
//         let current = this.top;
//         while(current!==null){
//             console.log(current.data);
//             current = current.next
//         }
//     }

//   }
  


// const stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.display()

// // console.log(stack.peek()); // Output: 30

// // console.log(stack.pop()); // Output: 30
// // console.log(stack.pop()); // Output: 20

// // console.log(stack.isEmpty()); // Output: false

// // console.log(stack.getSize()); // Output: 1

// // stack.clear();
// // console.log(stack.isEmpty()); // Output: true
