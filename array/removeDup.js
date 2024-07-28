

function dupArr(arr){
    let uniqarr = []
    for(let i=0;i<arr.length;i++){
      let dup = 0;
      for(let j=i+1;j<arr.length;j++){
        if(arr[i]===arr[j]){
          dup = 1;
          break
        }
      }
      if(dup==0){
        uniqarr.push(arr[i])
      }
    }
    return uniqarr;
  }
  console.log(dupArr([1,2,3,4,5,2,1]));