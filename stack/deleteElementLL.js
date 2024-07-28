


class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class StackLL{
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
            return 0;
        }
        let popednode = this.top.data
        this.top = this.top.next;
        return popednode
    }

    deleteElement(element){

        if(this.top.data === element){
            return
        }

        let current = this.top;
        let prev = null;
        while(current!==null){
            if(current.data === element){
                prev.next = current.next
                return
            }
            prev = current;
            current = current.next;
        }
        // return `${element} not found`
        console.log(`${element} not fund`);
    }

    print(){
        let current = this.top;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

let stack = new StackLL()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(6)
stack.pop()
stack.print()
console.log('-----delete specific element-----');
stack.deleteElement(4)
stack.print()
