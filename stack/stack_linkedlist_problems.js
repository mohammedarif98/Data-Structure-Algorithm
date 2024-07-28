

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
    }

    push(data){
        const newnode = new Node(data);
        newnode.next = this.top;
        this.top = newnode;
    }

    pop(){
        if(this.top === null){
            console.log("empty stack");
        }else{
            this.top = this.top.next
        }
    }

    peek(){
        console.log(this.top.data);
    }

    sum(){
        let total = 0;
        let current = this.top;
        while(current!==null){
            total+=current.data;
            current = current.next;
        }
        console.log(total);
    }

    OddEven(){
        let odd = " ";
        let even = " ";
        let current = this.top;
        while(current!==null){
            if(current.data%2==0){
                even+=current.data+" ";
            }else{
                odd+=current.data+" ";
            }
            current = current.next;
        }
        console.log("even :",even," ","odd :",odd);
    }

    alternative(){
        let counter = 0;
        let current = this.top;
        while(current!==null){
            if(counter%2==0){
                console.log(current.data);
            }
            counter++
            current = current.next;
        }
        return 0
    }

    search(target){
        let current = this.top;
        while(current!==null){
            if(target === current.data){
                return "found"
            }
            current = current.next
        }
        return "not found";
    }

    midEle(){
        let slow = this.top;
        let fast = this.top;
        while(fast.next && fast.next.next){
            slow = slow.next;
            fast = fast.next.next;
        }
        console.log(slow.data);
    }

    delmidElement(){
        let prev = null;
        let slow = this.top;
        let fast = this.top;
        while(fast.next && fast.next.next){
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        if(prev){  //*it means the middle node is the first node.

            prev.next = slow.next; //*: If the middle node is not the first node, it means prev is pointing to the node before the middle node.
                                   //* To delete the middle node, we update the next of prev to point to the node after the middle node (slow.next).
        }else{
            this.top = slow.next; //* In this case, to delete the first node (the middle node),
                                  //* we update the top of the linked list to point to the node after the middle node (slow.next).
        }
    }

    stacksorting(){
        let sortedarr = []
        let current = this.top;
        while(current!==null){
            sortedarr.push(current.data);
            current = current.next
        }
        sortedarr.sort((a,b)=>b-a);
        current = this.top;
        for(let i=0;i<sortedarr.length;i++){
            current.data = sortedarr[i];
            current = current.next;
        }
        return this.top;
    }
    
    reverse() {
        let prev = null;
        let current = this.top;
        while (current) {
          let temp = current.next;
          current.next = prev;
          prev = current;
          current = temp;
        }
        this.top = prev;
      }

    print(){
        let current = this.top;
        while(current!==null){
            console.log(current.data);
            current = current.next;
        }
    }
}

let sll = new Stack()

sll.push(1)
sll.push(2)
sll.push(3)
sll.push(4)
sll.push(5)
sll.push(6)
sll.print()
console.log("-----after poping------");
sll.pop()
sll.print()
console.log("-----top node------");
sll.peek()
console.log("-----sum------");
sll.sum()
console.log("-----odd even------");
sll.OddEven()
console.log("-----alternative elements------");
sll.alternative()
console.log("-----mid elements------");
sll.midEle()
console.log("-----searching elements------");
console.log(sll.search(4));
console.log("-----sorting elements------");
sll.stacksorting()
sll.print()
console.log("-----mid delete------");
sll.delmidElement()
sll.print()
console.log("-----reverse------");
sll.reverse()
sll.print()