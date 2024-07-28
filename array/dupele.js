

 
function findDuplicates(arr) {
    let duplicates = [];
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j] ) {
          duplicates.push(arr[i]);
          break; // Remove this line if you want to find all duplicates, not just the first occurrence
        }
      }
    }
  
    return duplicates;
  }
  
  const array = [1, 2, 3, 4, 3, 2, 5, 6, 1];
  console.log(findDuplicates(array)); // Output: [3, 2, 1]
  