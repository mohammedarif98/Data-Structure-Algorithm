

function unique(arr){

    let auiqarr = [];
    for(let i=0;i<arr.length;i++){
        let count = 0;
        for(let j=0;j<arr.length;j++){
           if(i!==j && arr[i]===arr[j]){
                count++;
           }
        }
        if(count===0){
            auiqarr.push(arr[i])
        }
    }
    return auiqarr
}
console.log(unique([1,2,3,4,5,7,2,4,1,]));

  