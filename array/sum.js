//? recursion

function sum(num){
   
   if(num<1){
      return num
   }else{
      return num+sum(num-1)
   }
}
console.log(sum(10));

function fact(num){
   if(num<2){
      return num;
   }else{
      return num*fact(num-1);
   }
}
console.log(fact(10));

//? use the  normal loop

// function arrSum(arr){
//     let sum = 0; 
//     for(let ele = 0 ; ele<arr.length ; ele++){
//         sum +=arr[ele] ; 
//     }
//     console.log(sum);
//     // return sum ;
// }
// var arrEle = [11,22,33,44,55]
// arrSum(arrEle)
// console.log(arrSum([1,2,3,4,5,6]));

//? using foreach 

// function arrSum(arr){
//     let sum = 0;
    
//     arr.forEach(ele => {
//         sum+=ele;
//     });

//     console.log(sum);
//     return sum;
// }
// arrSum([1,2,3,4,5])

//? for of loop 

// function arrSum(arr){
//     let sum = 0 ;
    
//     for(let ele of arr){
//         sum += ele ;
//     }
//     console.log(sum);
//     return sum;
// }
// arrSum([1,2,3,4,5])

//? arrow function  with foor in loop

// let arrSum = (arr)=>{
//     let sum = 0 ;
//      for( let ele in arr){
//         sum += arr[ele]
//      }
//      console.log(sum);
//      return sum;
// }
// arrSum([1,2,3,4,5])