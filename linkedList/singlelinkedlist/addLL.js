

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
    }
    
    prepend(value){                               //* adding an element or node at the beginning or front of a data structure
        const newnode = new Node(value);
        if(this.head === null){
            this.head = newnode;
            this.tail = newnode; 
        }else{
            newnode.next = this.head;
            this.head = newnode;
        }
    }
    
    print() {
        let current = this.head;
        while (current) {
          console.log(current.value);
          current = current.next;
        }
      }
}   

let  ll = new linkedList();

ll.append(100)
ll.append(200)
ll.append(300)
ll.print();

// ll.append(100)
// ll.append(200)
// ll.append(300)
// ll.print();

