
class Node{
    constructor(data){
        this.data = data;
        this.next = null
    }
}

class dQueue{
    constructor(){
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    addFront(data){
        let newnode = new Node(data);
        if(this.front===null){
            this.front = newnode;
            this.rear = newnode;
        }else{
            newnode.next = this.front;
            this.front = newnode;
        }
        this.size++
    }

    addBack(data){
        let newnode = new Node(data);
        if(this.front===null){
            this.front = newnode;
            this.rear = newnode;
        }else{
            this.rear.next = newnode;
            this.rear = newnode;
        }
        this.size++;
    }

    delFront(){
        let current = this.front.data;
        this.front = this.front.next;
        return current;
    }

   delBack(){
        let current = this.front;
        let prev = null;
        while (current.next!== null) {
            prev = current;
            current = current.next;
        }
        const rear_data = current.data;
        prev.next = null;
        this.rear = prev;
        return rear_data;
    }
    
    print(){
        let current = this.front;
        while(current!==null){
            console.log(current.data);
            current = current.next;
        }
    }
}

let dql = new dQueue()

dql.addFront(1)
dql.addBack(11)
dql.addFront(2)
dql.addBack(22)
dql.addFront(3)
dql.addBack(33)
dql.print()
console.log('-------');
dql.delFront()
dql.delBack()
dql.print()

//! double ended queue implementtion in array

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
