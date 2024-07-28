

function deleteMiddleElement(stack) {
    let leng = stack.length;
    let middleIndex = Math.floor(leng / 2);
    let tempStack = [];
    for (let i = 0; i < middleIndex; i++) {
      tempStack.push(stack.pop());
    }
    console.log(stack);
    console.log(tempStack);
    stack.pop();
    // console.log(stack);
    while (tempStack.length > 0) {
      stack.push(tempStack.pop());
    }
    return stack;
  }

console.log(deleteMiddleElement([1, 2, 3, 4, 5])); // [1, 2, 4, 5]
