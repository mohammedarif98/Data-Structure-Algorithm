

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class linkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    prepend(value){
        const newnode = new Node(value);
        if(this.size === 0){
            this.head = newnode;
            this.tail = newnode; 
        }else{
            newnode.next = this.head;
            this.head = newnode;
        }
        this.size++;
    }

    midElement(){
        let slow = this.head;
        let fast = this.head;
        while(fast!=null&&fast.next!=null){
            slow = slow.next;
            fast = fast.next.next;
        }
        console.log(slow.value);
    }

    print(){
        let current = this.head;
        while(current!==null){
            console.log(current.value);
            current = current.next;
        }
    }
} 

let  ll = new linkedList();

ll.prepend(100)
ll.prepend(200)
ll.prepend(250)
ll.prepend(500)
ll.prepend(300)
ll.prepend(400)

ll.print();

console.log('---middle element---');
ll.midElement()
ll.print();
