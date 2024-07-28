

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
        if(this.head === null){
            this.head = newnode;
            this.tail = newnode; 
        }else{
            newnode.next = this.head;
            this.head = newnode;
        }
    }

    delete(pos){
        if(pos==0){
            this.head=this.head.next;
            return;
        }
        let temp = this.head;
        let prev = null;
        //jump till node to be deleted
        for(let i=1;i<=pos;i++){
            prev=temp; //keep track of prev
            temp=temp.next; //jump to next node 
        }
        prev.next=temp.next; //reassign pointers
    }


    print() {
        let current = this.head;
        while (current !== null) {
          console.log(current.value);
          current = current.next;
        }
      }
}   

let  ll = new linkedList();

ll.prepend(100)
ll.prepend(200)
ll.prepend(300)
ll.prepend(400)

ll.print();

console.log('---delete value in specific index---');
ll.delete(1)
ll.print();
