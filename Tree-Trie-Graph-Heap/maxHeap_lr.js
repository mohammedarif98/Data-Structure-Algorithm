
class MaxHeap {
    constructor() {
      this.heap = [];
    }
  
    insert(value) {
      this.heap.push(value);
      this.heapifyUp(this.heap.length - 1);
    }
  
    heapifyUp(index) {
      var parentIndex = Math.floor((index - 1) / 2);
      while (index > 0 && this.heap[index] > this.heap[parentIndex]){
        [this.heap[index], this.heap[parentIndex]]=
        [this.heap[parentIndex], this.heap[index]];
        index = parentIndex;
      }
    }
    
    deleteRoot() {
      if (this.heap.length === 0) {
        return null; // Heap is empty
      }
      const root = this.heap[0];
      const lastElement = this.heap.pop();
      if (this.heap.length > 0) {
        this.heap[0] = lastElement;
        this.heapifyDown(0);
      }
      return root;
    }

heapifyDown(index) {
const leftChildIndex = 2*index+1;
const rightChildIndex = 2*index+2;
let largest = index;
const heapSize = this.heap.length;
if (leftChildIndex < heapSize && this.heap[leftChildIndex]>this.heap[largest]){
largest = leftChildIndex;
}
if (rightChildIndex < heapSize && this.heap[rightChildIndex]>this.heap[largest]){
largest = rightChildIndex;
}
if (largest !== index) {
[this.heap[index], this.heap[largest]]=[this.heap[largest],this.heap[index]];
this.heapifyDown(largest);
}
}
  }
  
  // Example usage
  const maxHeap = new MaxHeap();
  maxHeap.insert(50);
  maxHeap.insert(30);
  maxHeap.insert(70);
  maxHeap.insert(10);
  maxHeap.insert(40);
  
  console.log(maxHeap.heap); // [ 70, 40, 50, 10, 30 ]
  maxHeap.deleteRoot();
  console.log(maxHeap.heap); // [ 50, 40, 30, 10 ]
  