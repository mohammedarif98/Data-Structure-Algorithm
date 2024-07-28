
class Queue{
    constructor(){
        this.item = [];
    }
    
    enqueue(ele){
        this.item.push(ele);
    }

    dequeue(){
        return this.item.shift();
    }

    peek(){
        return this.item[0];
    }

    print(){
       console.log(this.item);
    }
}

let qsa = new Queue()

qsa.enqueue(1)
qsa.enqueue(2)
qsa.enqueue(3)
qsa.enqueue(4)
qsa.enqueue(5)
qsa.dequeue()
qsa.print()
console.log(qsa.peek());