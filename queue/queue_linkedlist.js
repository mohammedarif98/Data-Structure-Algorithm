class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class Queue{
    constructor(){
        this.rear = null;
        this.front = null;
        this.size = 0;
    }
    enqueue(data){ 
        let newnode = new Node(data);
        if(this.front===null){
            this.front = newnode;
            this.rear = newnode;
        }else{
            this.rear.next = newnode;
            this.rear = newnode
        }
        this.size++
    }
    dequeue(){    
        if(this.front===null){
            return null;
        }else{
            const node = this.front;
            this.front = this.front.next;
            if(this.front === null){
                this.rear = null
            }
            this.size--;
            return node.data
        }
    }
    print(){
        let current = this.front;
        while(current){
            console.log(current.data);
            current = current.next
        }
    }
    search(target){
        let current = this.front;
        while(current){
            if(target === current.data){
                return true;
            }
            current = current.next
        }
        return false;
    }
    sum(){
        let total = 0;
        let current = this.front;
        while(current){
            total+=current.data;
            current = current.next;
        }
        return total;
    }
    even(){
        let evennumber = []
        // let evnsum = 0;
        let current = this.front;
        while(current){
            if(current.data%2==0){
                evennumber.push(current.data)
                // evnsum+=current.data
            }
            current = current.next;
        }
        return evennumber;
    }
    peek(){
        return this.front.data
    }
    sizee(){
        return this.size
    }

    // print(){
    //     let current = this.front;
    //     while(current){
    //         console.log(current.data);
    //         current = current.next
    //     }
    // }
}

let qll = new Queue()

qll.enqueue(1)
qll.enqueue(2)
qll.enqueue(3)
qll.enqueue(4)
qll.enqueue(5)
// qll.dequeue();
qll.print()

console.log('-----topmost node-----');
console.log(qll.peek());

console.log('------total length--------');
console.log(qll.sizee());

console.log('------search--------');
console.log(qll.search(3));

console.log('------total--------');
console.log(qll.sum());

console.log('------evevn--------');
console.log(qll.even());
