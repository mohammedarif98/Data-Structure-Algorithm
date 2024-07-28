

class MinHeap{
    constructor(){
        this.heap = []
    }

    peek() {
        if (this.heap.length === 0) {
            return null;
        }
        return this.heap[0];
    }

    getLeftChildIndex(parentIndex){
        return 2 * parentIndex +1
    }
    getRightChildIndex(parentIndex){
        return 2 * parentIndex + 2
    }
    getParentindex(childindex){
        return Math.floor((childindex-1)/2)
    }
    hasLeftChild(index){
        return this.getLeftChildIndex(index) < this.heap.length
    }
    hasRightChild(index){
        return this.getRightChildIndex(index) < this.heap.length
    }
    hasParent(index){
        return this.getParentindex(index) >= 0
    }
    leftChildIndex(index){
        return this.getLeftChildIndex(index)
    }
    RightChildIndex(index){
        return this.getRightChildIndex(index)
    }
    parent(index){
        return this.heap[this.getParentindex(index)]
    }
    //functions to create min heap
    swap(indexOne, indexTwo) {
        const temp = this.heap[indexOne]
        this.heap[indexOne] = this.heap[indexTwo]
        this.heap[indexTwo] = temp
    }
    remove(){
        if(this.heap.length === 0){
            return null
        }
        const item = this.heap[0]
        this.heap[0] = this.heap[this.heap.length-1]
        this.heap.pop();
        this.heapifyDown();
        return item;
    }
    add(item){
        this.heap.push(item)
        this.heapifyUp()
    }
    heapifyUp(){
        let index = this.heap.length - 1
        while(this.hasParent(index) && this.parent(index) > this.heap[index]){
        this.swap(this.getParentindex(index), index)
        index = this.getParentindex(index);    
        }
    }
    heapifyDown(){
        let index = 0 
        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index)
            if(this.hasRightChild(index) && this.RightChildIndex(index) < this.leftChildIndex(index)) {
                smallerChildIndex = this.heap[smallerChildIndex]
            }
            if(this.heap[index] < this.heap[smallerChildIndex]) {
                break;
            } else {
                this.swap(index, smallerChildIndex)
            }
            index = smallerChildIndex
        }
    }
    printHeap() {
        var heap = `${this.heap[0]}`;
        for (var i = 1; i < this.heap.length; i++) {
          heap += ` ${this.heap[i]}`; 
        }
        console.log(heap + " ");
      }
}
var heap = new MinHeap()
heap.add(10);
heap.add(15);
heap.add(30);
heap.add(40);
heap.add(50);
heap.add(60);
heap.add(70);
heap.add(100);
heap.printHeap();

console.log(heap.peek());
console.log(heap.remove());

heap.printHeap();