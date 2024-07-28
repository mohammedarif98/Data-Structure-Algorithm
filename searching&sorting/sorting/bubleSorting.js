function bb(arr){
    let len = arr.length-1;
    for(let i=0;i<len;i++){
        for(let j=0;j<len-i;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
             }
        }
    }
    return arr
}
console.log(bb([3,1,5,67,75,33,52]));
//!===============================================
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
//!========================================
function selectionSort(arr){
    let len = arr.length-1;
    for(let i=0;i<len;i++){
        let minindex = i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minindex]){
                minindex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minindex];
        arr[minindex] = temp
    }
    return arr;
}
console.log(selectionSort([2,5,6,8,13,46,56]));
//!===============================================
function mergeSort(arr){
    if(arr.length<2){
        return arr
    }
    const mid = Math.floor(arr.length/2)
    const leftArr = arr.slice(0,mid)
    const rightArr = arr.slice(mid)
    return merge(mergeSort(leftArr),mergeSort(rightArr))
}
function merge(leftArr,rightArr){
    const sortedArr = []
    while(leftArr.length && rightArr.length){
        if(leftArr[0]<=rightArr[0]){
            sortedArr.push(leftArr.shift())
        }else{
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr]
}
console.log(mergeSort([8,20,-2,4,-6]));
//!===============================================
function quickSort(arr, left=0, right = arr.length - 1) {
    if (left < right) {
      const pivotIndex = partition(arr, left, right);
      quickSort(arr, left, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
  }
function partition(arr, left, right) {
    const pivot = arr[right];
    let i = left - 1;
    for (let j =left; j < right; j++) {
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    return i + 1;
  }
const arr = [5, 3, 7, 6, 2, 9];
console.log(quickSort(arr)); 
