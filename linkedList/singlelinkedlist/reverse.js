

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

    reverse() {
        let prev = null;
        let curr = this.head;
        while (curr) {
          let temp = curr.next;
          curr.next = prev;
          prev = curr;
          curr = temp;
        }
        this.head = prev;
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
ll.prepend(300)
ll.prepend(400)

ll.print();

console.log('---reverse the linked list---');
ll.reverse()
ll.print();
