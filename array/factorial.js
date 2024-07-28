
// let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// myArray.forEach((element, index) => {
//     if (index % 2 === 0) {
//       console.log(element);
//     }
//   });


// function factorial(num){
    
//     fact = 1 ;

//     for(let i=2; i<=num; i++){
//         fact = fact*i;
//     }
//     return fact ; 
// }
// console.log(factorial(3));

//! using factorial

function factorialRecursion(num){
    if(num === 0){
        return 1 ;
    }
    return num * factorialRecursion(num-1);
}

console.log(factorialRecursion(7));


