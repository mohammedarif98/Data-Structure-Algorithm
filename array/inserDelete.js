

function deleteElementByIndex(arr, index) {
    for (let i = index; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr.length = arr.length - 1;
    console.log(arr);
  }
deleteElementByIndex([2, 3, 4, 5, 6], 2);
  



// function insert(arr, index, element) {
//     for (let i = arr.length; i > index; i--) {
//       arr[i] = arr[i - 1];
//     }
//     arr[index] = element;
//     console.log(arr);
//   }
  
//   insert([2, 3, 4, 5, 6], 2, 9999);
  