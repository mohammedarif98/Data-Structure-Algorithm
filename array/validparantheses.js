function isValid(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (stack.length === 0) {
                return false;
            }
            const top = stack.pop();
            if (
                (char === ')' && top !== '(') ||
                (char === ']' && top !== '[') ||
                (char === '}' && top !== '{')
            ) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(isValid("()")); // Output: true
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("(]")); // Output: false
console.log(isValid("([)]")); // Output: false
console.log(isValid("{[]}")); // Output: true

//!=============================

// function isValid(s) {
//     const stack = []; // Initialize an empty stack to store opening brackets.
//     for (let i = 0; i < s.length; i++) { // Loop through each character in the input string.
//         const char = s[i]; // Get the current character from the string.
//         if (char === '(' || char === '{' || char === '[') { // If it's an opening bracket,
//             stack.push(char); // push it onto the stack.
//         } else { // If it's a closing bracket,
//             if (stack.length === 0) { // check if the stack is empty.
//                 return false; // If it's empty, there's no matching opening bracket, so return false.
//             }
//             const top = stack.pop(); // Pop the top element from the stack (matching opening bracket).
//             if (
//                 (char === ')' && top !== '(') || // Check if the closing bracket matches the top opening bracket.
//                 (char === ']' && top !== '[') ||
//                 (char === '}' && top !== '{')
//             ) {
//                 return false; // If the brackets do not match, return false.
//             }
//         }
//     }
//     return stack.length === 0; // After processing all characters, check if the stack is empty. If it is, return true; otherwise, return false.
// }
