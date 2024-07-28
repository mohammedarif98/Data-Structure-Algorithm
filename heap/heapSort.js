
function heapSort(arr) {
    const n = arr.length;
    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
    // Extract elements from heap one by one
    for (let i = n - 1; i > 0; i--) {     // Move current root to the end
        const temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;                   // Call max heapify on the reduced heap
        heapify(arr, i, 0);
    }
}
function heapify(arr, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest !== i) {
        const temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;  
        heapify(arr, n, largest);    // Recursively heapify the affected sub-tree
    }
}

const array = [12, 11, 13, 5, 6, 7];
console.log("Original Array:", array);
heapSort(array);
console.log("Sorted Array:", array);
