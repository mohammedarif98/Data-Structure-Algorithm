class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    insert(value) {
      this.heap.push(value);
      this.heapifyUp(this.heap.length - 1);
    }
  
    heapifyUp(index) {
      var parentIndex = Math.floor((index - 1) / 2);
      while (index > 0 && this.heap[index] < this.heap[parentIndex]){
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
let smallest = index;
const heapSize = this.heap.length;
if (leftChildIndex < heapSize && this.heap[leftChildIndex]<this.heap[smallest]) {
  smallest = leftChildIndex;
}
if (rightChildIndex < heapSize && this.heap[rightChildIndex]<this.heap[smallest]) {
  smallest = rightChildIndex;
}
if (smallest !== index) {
  [this.heap[index],this.heap[smallest]]=[this.heap[smallest],this.heap[index]];
  this.heapifyDown(smallest);
}
}
}

// Example usage
const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(50);
minHeap.insert(30);
minHeap.insert(70);
minHeap.insert(40);

console.log(minHeap.heap); // [ 10, 30, 50, 70, 40 ]
minHeap.deleteRoot();
console.log(minHeap.heap); // [ 30, 40, 50, 70 ]
