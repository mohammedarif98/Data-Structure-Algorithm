

//!

// function twoSum(arr,target){
//     let newarr = [];
//     for(let i=0; i<arr.length-1;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]+arr[j] === target){
//                 newarr.push(arr[i],arr[j]);
//                 // newarr.push(i,j);
//                 return newarr
//             }
//         }
//     }
//      return newarr  //* if we dont get value the output is undifiend
// }
// console.log(twoSum([12,3,6,5,67,10,6,22],11));




//! align one specific element end of the array 

// const sameNumber = (array, target) => {
//     for (j = array.length -1; j > 0; j--) {
//         if(array[j] !== target) {
//             for (i = 0; i<j; i++) {
//                 if (array[i] === target) {
//                     let temp = array[i];
//                     array[i] = array[j];
//                     array[j] = temp;
//                 }
//             }
//         }
//     }
//     return array;
// }
// const array = [6, 1, 6, 8, 10, 4, 15, 6, 3, 9, 6];
// const target = 6;
// console.log(sameNumber(array, target));


//--Second Method--

// const sameNumber = (array, target) => {
//     for (i = array.length - 1; i >=0 ; i--) {
//         if(array[i] === target) {
//             array.splice(i, 1)
//             array.push(target)
//         }
//     }
//     return array;
// }

// const array = [6, 1, 6, 8, 10, 4, 15, 6, 3, 9, 6];
// const target = 6;

// console.log(sameNumber(array, target));