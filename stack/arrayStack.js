
class stack{
    constructor(){
        this.items = []
    }
    push(ele){
        this.items.push(ele)
    }
    pop(){
        return this.items.pop();
    }
    peek(){
        return this.items[this.items.length-1]
    }
    search(target){
        for(let i=0;i<this.items.length;i++){
            if(target===this.items[i]){
                return true
            }
        }
        return false
    }
    sum(){
        let total = 0
        for(let i=0;i<this.items[i];i++){
            total+=this.items[i]
        }
        return total;
    }
    print(){
        console.log(this.items);
    }
}
let sss = new stack()
sss.push(1)
sss.push(2)
sss.push(3)
sss.push(4)
sss.push(5)
sss.print()

console.log('-----after poping------');
// console.log(sss.pop());
sss.pop()
sss.print()

console.log('-----topmost element------');
console.log(sss.peek());

console.log('-------searching-------')
console.log(sss.search(3));

console.log('-------total-------')
console.log(sss.sum());