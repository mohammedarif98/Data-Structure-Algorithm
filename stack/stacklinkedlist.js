
class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class stack{
  constructor(){
    this.top = null;
  }

  push(data){
    let newnode = new Node(data);
    newnode.next = this.top;
    this.top = newnode;
  }

  pop(){
    if(this.top==null){
      return null;
    }
    let curr = this.top.data
    this.top = this.top.next;
    return curr
  }

  peek(){
    return this.top ? this.top.data : null;
  }

  search(target){
    let current = this.top;
    while(current){
      if(current.data === target){
        return true;
      }
      current = current.next
    }
    return false;
  }

  sumstack(){
    let current = this.top;
    let sum=0;
    while(current){
      sum+=current.data;
      current = current.next;
    }
    return sum
  }

  middelete(){
    let prev = null;
    let slow = this.top;
    let fast = this.top;
    while(fast.next && fast.next.next){
      prev = slow;
      slow = slow.next;
      fast = fast.next.next;
    }
    // if(prev){
    //   prev.next = slow.next;
    // }else{
    //   this.top = slow.next;
    // }
    // slow.next = null;
    return slow.data;
  }

  print(){
    let current = this.top;
    while(current!==null){
      console.log(current.data);
      current = current.next;
    }
  }
}

let sll = new stack()

sll.push(1)
sll.push(2)
sll.push(3)
sll.push(4)
sll.push(5)
sll.push(6)
sll.print()

console.log('-----after poping-----');

sll.pop()
// console.log("deleted node : ",sll.pop());
sll.print()

console.log("------middelete-------");

console.log(sll.middelete());
// sll.print()

console.log('-------topmost element------');
console.log(sll.peek());

console.log('------searching---------');
console.log(sll.search(1));

console.log('------sum-------');
console.log(sll.sumstack());