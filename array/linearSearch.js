

function linearSearch(array,target){

    for(let i = 0;i<=array.length ; i++){
        if(target === array[i] ){
            return i;
        }
    }
    return -1;
}
let target = 11;
let arr = [22,33,45,11,66,88,32,11];

console.log(linearSearch(arr,target));

// if(res!= -1){
//     console.log(`the target ${target} present in index ${res}`);
// }else{
//     console.log(`the target ${target} not present `);
// }
