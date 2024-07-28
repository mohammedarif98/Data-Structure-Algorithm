class Node{
    constructor(){
        this.children=[]
        this.end=false
    }
}

class Trie{
    constructor(){
        this.root=new Node()
    }
    insert(value){
        let temp=this.root
        for (let i=0;i<value.length;i++){
            let char=value[i]
            if(!temp.children[char]){
                temp.children[char]= new Node()
            }
            temp=temp.children[char]
        }
        temp.end=true
    }
    print(){
       this.printtravel(this.root,"")
    }
    printtravel(head,pre){
        if(head===null){
            return null
        }
        if(head.end){
            console.log(pre);
        }
        for( let char in head.children){
            const child=head.children[char]
            this.printtravel(child,pre+char)
        }
    }
    search(word){
        let temp=this.root
        for( let i=0;i<word.length;i++){
            const char=word[i]
            if(!temp.children[char]){
              return false
            }
            temp=temp.children[char]
        }
        return temp.end;
    }
    prefix(word){
        let temp=this.root
        for( let i=0;i<word.length;i++){
            const char=word[i]
            if(!temp.children[char]){
              return false
            }
            temp=temp.children[char]
        }
        return true
    }

    longestCommonPrefix() {
        let prefix = '';
        let currentNode = this.root;
    
        while (Object.keys(currentNode.children).length === 1 && !currentNode.end) {
          const char = Object.keys(currentNode.children)[0];
          prefix =prefix+ char;
          currentNode = currentNode.children[char];
        }
    
        return prefix;
      }
      startingletter(word){
        let temp=this.root;
        for(let i=0;i<word.length;i++){
            const char=word[i];
            if(!temp.children[char]){
                return false;
            }
            temp=temp.children[char];
        }
        return word
      }
}

const TRIE = new Trie()
TRIE.insert("apple")
TRIE.insert("application")
TRIE.insert("app")
// TRIE.print()

// console.log(TRIE.search("appl"));
console.log(TRIE.prefix("app"));
console.log(TRIE.prefix("appl"));
console.log(TRIE.longestCommonPrefix()); 
console.log(TRIE.startingletter("a"));