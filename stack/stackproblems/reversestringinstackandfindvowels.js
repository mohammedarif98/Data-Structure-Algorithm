

function reverseStringStack(str) {
    const stack = [];
    const vowels = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }
    let reversedStr = "";
    let vowelCount = 0;
    while (stack.length > 0) {
        const char = stack.pop();
        if (vowels.includes(char.toLowerCase())) {
            vowelCount++;
        }
        reversedStr += char;
    }
    return { reversedStr, vowelCount };
}
const str = "mohammed_arif";
// const {reversedStr,vowelCount} = reverseStringStack(str);
// const vowelCount = reverseStringStack(str);

// console.log("After reversal:", reversedStr,"\nvowels count :",vowelCount);  // !dlrow ,olleH

console.log(reverseStringStack(str));