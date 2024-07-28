

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

    sortLinkedList() {
        let currentNode = this.head;
        let sortedList = [];
      
        while (currentNode !== null) {
          sortedList.push(currentNode.value);
          currentNode = currentNode.next;
        }
        sortedList.sort((a, b) => a-b );       //sorted array

        currentNode = this.head;                   // sorted array to linked list
        for (let i = 0; i < sortedList.length; i++) {
          currentNode.value = sortedList[i];
          currentNode = currentNode.next;
        }
        return this.head;
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
ll.prepend(300)
ll.prepend(400)
ll.prepend(400)
ll.prepend(200)
ll.prepend(50)

ll.print();

console.log('------');
ll.sortLinkedList()
ll.print();

