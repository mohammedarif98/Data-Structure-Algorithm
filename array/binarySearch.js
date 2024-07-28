


// function binarySearch(arr,target){

//     let leftindex = 0;
//     let rightindex = arr.length - 1 ; 
    
//     while( leftindex <= rightindex){
//         let midindex = Math.floor((leftindex + rightindex)/2);
//         if(target === arr[midindex]){
//             return midindex;
//         }
//         if( target < arr[midindex]){
//             rightindex = midindex -1;
//         }else{
//             leftindex = midindex + 1;
//         }
//     }
//     return -1;
// }
// console.log(binarySearch([1,2,3,4,5,6,7,8],3));

//! using recurtion 

function binaryRecusion(arr,target){
    return binarySearch(arr,target,0,arr.length-1)
}

function binarySearch(arr,target,left,right){
    
    if(left > right){
        return false 
    }
        let mid = Math.floor((left+right)/2);
        if(target === arr[mid]){
            return mid;
        }else if (target < arr[mid]){
            return binaryRecusion(arr,target,left,mid-1) 
        }else{
            return binaryRecusion(arr,target,right,mid+1)
        }
}
console.log(binarySearch([1,2,3,4,5,6,7,8,9],5));


// function recBinary(arr,target){
//     return search(arr,target,0,arr.length - 1)
// }

// function search(arr,target,leftindex,rigthindex){
//     if(leftindex > rigthindex){
//         return -1 ; 
//     }
//     let midindex = Math.floor((leftindex + rigthindex)/2);
//     if(target === arr[midindex]){
//         return midindex;
//     }
//     if(target < arr[midindex]){
//         return search(arr,target,leftindex,midindex-1)
//     }else{
//         return search(arr,target,midindex+1,rigthindex)
//     }
// }
// console.log(recBinary([1,2,3,4,5,6,7,8,9],5));