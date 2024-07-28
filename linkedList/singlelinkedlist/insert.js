

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

    append(value){                            //* adding an element or node at the end of a data structure.                          
        const newnode = new Node(value);
        if(this.head === null){
            this.head = newnode;
            this.tail = newnode;
        }else{
            this.tail.next = newnode;
            this.tail = newnode
        }
        this.size++;
    }

    insert(value,index){                                //* insert element in a given index
        if(index < 0 || index > this.size){
            return -1
        }
        if(index === null ){
            this.append(value)
        }else{
            const newnode = new Node(value)
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            newnode.next = prev.next
            prev.next = newnode
        }
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

// ll.append(100)
// ll.append(200)
ll.append(300)
ll.append(400)

ll.print();

console.log('---inseting value in specific index---');
ll.insert(500,2)
ll.print();
