
// let arr = [23,44,4,21,111,24]
// let larger = arr[0];

// for(let ele of arr){
//     if(ele<larger){
//         larger = ele;
//     }
// }
// console.log(larger);

//?  using normal function

function largestElement(arr){
    let larger = arr[0];
    
    for(let ele of arr){
        if(ele > larger){
            larger = ele;
        }
    }
    console.log(larger);
    return larger;
}
const array = [23,44,4,21,111,24];
largestElement(array)

//? using arrow function 

// let largerElement = (arr)=>{
//     let larger = arr[0];
//     for(let ele in arr){
//         if(arr[ele] > larger){
//             larger = arr[ele];
//         }    
//     }    
//     console.log(larger);
//     return larger; 
// }
// const array = [23,44,204,21,11,24];
// largerElement(array)

//? forEach function 

// function largestElement(array){

//     let larger = array[0];
//     array.forEach(function(ele,index){
//         if(ele > larger){
//             larger = ele;
//         }
//     });
//     // console.log(index);
//     console.log(larger);
//     return larger;
// }
// let arr = [20,45,54,61,72,85,44]
// largestElement(arr)
    
//? foreach without regular function 

// let arr = [22,31,34,67,88];
// let  larger = arr[0];

// let largestElement = arr.forEach(function(ele){
        
//     if(ele > larger){
//         larger = ele;
//     }
// })
// console.log(larger);
