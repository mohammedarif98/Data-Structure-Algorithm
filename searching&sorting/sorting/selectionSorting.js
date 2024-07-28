
function selectionSort(arr) {
    let len = arr.length - 1;
    // 'len' stores the index of the last element in the array.
    // We use 'len' in the outer loop to limit the number of iterations.                    
    for (let i = 0; i < len; i++) {
      // Outer loop: It runs from the beginning of the array to the second last element.
      let minIndex = i;
      // 'minIndex' stores the index of the minimum element found during each iteration of the outer loop.
      // We assume that the minimum element is at index 'i' initially.
      for (let j = i + 1; j < arr.length; j++) {
        // Inner loop: It runs from the element next to the current element (i+1) till the end of the array.
        if (arr[j] > arr[minIndex]) {
          // If we find an element smaller than the current minimum element, update 'minIndex'.
          // This step helps to find the index of the smallest element in the unsorted part of the array.
          minIndex = j;
        }
      }
      // After the inner loop, we have found the index of the minimum element in the unsorted part of the array.
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
      // Swap the current element (arr[i]) with the smallest element found (arr[minIndex]).
      // This step places the smallest element in its correct sorted position.
      // The outer loop repeats for each 'i', effectively sorting the array in ascending order.
    }
    return arr;
    // The sorted array is now returned.
  }
console.log(selectionSort([2,5,6,8,13,46,56]));
  

//! -------------------------------------------


// function selectionSort(arr){
//     let len = arr.length-1;
//     for(let i=0;i<len;i++){
//         let minindex = i;
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[minindex]){
//                 minindex = j;
//             }
//         }
//         let temp = arr[i];
//         arr[i] = arr[minindex];
//         arr[minindex] = temp
//     }
//     return arr;
// }
// // let sortarr = selectionSort([2,5,6,8,13,46,56]);
// console.log(selectionSort([2,5,6,8,13,46,56]));