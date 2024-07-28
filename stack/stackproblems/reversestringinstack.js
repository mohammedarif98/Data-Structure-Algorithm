// function reverseString(string) {
//     const stack = [];
  
//     for (const char of string) {
//       stack.push(char);
//     }
  
//     let reversedString = "";
//     while (stack.length) {
//       reversedString += stack.pop();
//     }
  
//     return reversedString;
//   }
  
// console.log(reverseString("hello"));
  

//!---------------------------------

function reverseStringStack(str) {
    const stack = [];

    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }
    let reversedStr = "";
    while (stack.length > 0) {
        reversedStr += stack.pop();
    }
    return reversedStr;
}
console.log(reverseStringStack('Hello'));


