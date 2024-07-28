

// function prime(num){

//     if(num<2){
//         return `enter number above 2`;
//     }

//     for(i=2;i<num;i++){
//         if(num%i==0){
//             return `${num} is not prime number`;
//         }
//     }
//     return `${num} is prime number`;   
// }
// console.log(prime(2));

//! 2-n number prime number

function prime(num){
    let primearr = [];
    for(i=0;i<=num;i++){
        let flag = 0;
        for(j=2;j<i;j++){
            if(i%j==0){
                flag = 1;
                break;
            }
        }
        if(flag==0 && i>1){
            primearr.push(i);
        }
    }
    return primearr;
}
console.log(prime(100));

//! prime number in array

// function prime(arr){
//     let primearr = [];
//     let count = 0;
//     for(let i=0;i<arr.length;i++){
//         let flag = 0;
//         for(let j=2;j<arr[i];j++){
//             if(arr[i]%j==0){
//                 flag = 1;
//                 break;
//             }
//         }
//         if(flag==0){
//             count++
//             primearr.push(arr[i])
//         }
//     }
//     console.log(count);
//     return primearr
// }
// console.log(prime([11,22,33,2,4,6,5,7,9]));

