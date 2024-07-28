class Node{
    constructor(){
        this.children=[];
        this.end=false;
    }
}
class trie{
    constructor(){
        this.root=new Node();
    }

    insert(value){
        let temp=this.root;
        for(let i=0;i<value.length;i++){
            let char=value[i];
            if(!temp.children[char]){
                temp.children[char]=new Node();
            }
            temp=temp.children[char];
        }
        temp.end=true;
    }

    print(){
        this.printTravel(this.root,"");
    }

    printTravel(head,pre){
        if(head===null)
        return null
        if(head.end)
        console.log(pre);
        for(let char in head.children){
            const child=head.children[char]
            this.printTravel(child,pre+char)
        }
    }
    search(word){
        let temp=this.root;
        for(let i=0;i<word.length;i++){
            const char=word[i];
            if(!temp.children[char])
            return false;
            temp=temp.children[char];
        }
        return temp.end;
    }

    prefix(word){
        let temp=this.root;
        for(let i=0;i<word.length;i++){
            const char=word[i];
            if(!temp.children[char])
            return false;
            temp=temp.children[char]
        }
        return true;
    }
}
const t=new trie();
t.insert("cat");
t.insert("dog")
t.print()
console.log(t.search("dog"));
console.log(t.prefix("ca"));