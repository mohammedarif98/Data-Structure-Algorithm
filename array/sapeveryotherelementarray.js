let myArray = [12, -2, 55, 68, 80];
for (let i=0;i<myArray.length-1;i+=2) {
    [myArray[i], myArray[i + 1]] = [myArray[i + 1], myArray[i]];
}
console.log(myArray);