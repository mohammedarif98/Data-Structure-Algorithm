
function insertionSort(arr) {
        // 'arr' is the input array that we want to sort using Insertion Sort.
        for (let i = 1; i < arr.length; i++) {
        // The outer loop runs from the second element (index 1) to the end of the array.
        // The element at index 0 is considered already sorted.
        let current = arr[i];
        // 'current' holds the value of the element we are currently considering for insertion.
        let j = i - 1;
        // 'j' starts from the index just before 'i' and moves towards the beginning of the array.
        while (j >= 0 && arr[j] > current) {
            // The inner loop iterates as long as:
            // 1. 'j' is greater than or equal to 0 (valid index) AND
            // 2. The element at 'j' is greater than the 'current' element we are considering.
            arr[j + 1] = arr[j];
            // Shift the element at 'j' one position to the right.
            // This essentially moves the larger element to the right (one position ahead).
            j--;
            // Move 'j' one position to the left to continue comparing with the previous elements.
        }
        arr[j + 1] = current;
        // After the inner loop, we've found the correct position to insert 'current'.
        // 'current' is placed at 'j + 1' index, which is its correct sorted position.
        // This step ensures that the elements to the left of 'current' are already sorted.
        // The inner loop repeats for each 'i', making sure the array is sorted up to the 'i' index.
        }
        return arr;
        // The sorted array is now returned.
    }
  console.log(insertionSort([3,5,7,1,9,2]));


//! --------------------------------------------------------------------------


function insertionSort(arr){
    
    for(let i=1;i<arr.length;i++){
        let current = arr[i] ;
        let j = i-1;
        while(j>=0 && current < arr[j] ){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = current;
    }
    return arr;
}
console.log(insertionSort([3,24,6,56,44,87,7]));

