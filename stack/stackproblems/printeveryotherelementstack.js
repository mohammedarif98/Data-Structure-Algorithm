
// function printEveryOtherElement(str) {
//     const stack = [];

//     for (let i = 0; i < str.length; i++) {
//         stack.push(str[i]);
//     }
//     let index = 0;
//     while (stack.length > 0) {
//         let char = stack.pop();
//         if (index % 2 === 0) {
//             console.log(char);
//         }
//         index++;
//     }
// }

// // printEveryOtherElement('Hello, world!');  //*   [! l o o l H]
// printEveryOtherElement('mohammed arif');


//!==============================

function alter(str){
    const stack = []
    let rev = ""
    for(let i=0;i<str.length;i++){
        stack.push(str[i])
    }
    let count = 0;
    while(stack.length>0){
        let char = stack.pop();
        if(count%2===0){
            // console.log(char);
            rev += char+' ';
        }
        count++;
    }
    return rev;
}
console.log(alter("mohammed arif"));

//!=============================

// function printEveryOtherElement(string) {
//     const stack = [];
  
//     for (const char of string) {
//       stack.push(char);
//     }
//     while (stack.length) {
//       if (stack.length % 2 === 0) {
//         console.log(stack.pop());
//       } else {
//         stack.pop();
//       }
//     }
//   }
// printEveryOtherElement('Hello, world!');

