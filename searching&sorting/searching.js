//* implicite & explicite

// console.log(3+3);
// console.log("3"+"3");
// console.log("3"+3);
// console.log("3"-3);
// console.log(3+"3");
// console.log("3"+"3"-"3");
// console.log("a"-3);

//! ================= linear search ======================

// function linearSearch(arr,target){
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i] === target){
//             return i
//         }
//     }
//     return 0
// }
// const arr = [1,2,3,8,5,9,4,7];
// let target  = 4

// console.log(linearSearch(arr,target));

//! ============= binary search ==================

// function binaryRecusion(arr,target){
//     return binarySearch(arr,target,0,arr.length-1)
// }

// function binarySearch(arr,target,left,right){
    
//     if(left > right){
//         return false 
//     }
//         let mid = Math.floor((left+right)/2);
//         if(target === arr[mid]){
//             return mid;
//         }else if (target < arr[mid]){
//             return binaryRecusion(arr,target,left,mid-1) 
//         }else{
//             return binaryRecusion(arr,target,right,mid+1)
//         }
// }
// console.log(binarySearch([1,2,3,4,5,6,7,8,9],5));



//! --------------------------

function binarySearch(arr,target){

    let leftindex = 0;
    let rightindex = arr.length - 1 ; 
    
    while( leftindex <= rightindex){
        let midindex = Math.floor((leftindex + rightindex)/2);
        if(target === arr[midindex]){
            return midindex;
        }
        if( target < arr[midindex]){
            rightindex = midindex -1;
        }else{
            leftindex = midindex + 1;
        }
    }
    return -1;
}
console.log(binarySearch([1,2,3,4,5,6,7,8],3));