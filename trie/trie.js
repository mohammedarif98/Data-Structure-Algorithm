function Node(value){
    this.value = value
    this.isEndOfWord = false;
    this.children = {}; 
}

class Trie{
constructor(){
    this.root = new Node(null)
}

insert(word){
    let current = this.root
    for(let character of word){
        if(current.children[character] === undefined){
            current.children[character] = new Node(character)
        }
        current = current.children[character]  
    }
    current.isEndOfWord = true
}

search(word){
    let current = this.root
    for(let character of word){
        if(current.children[character] === undefined){
            return false
        }
        current = current.children[character]  
    }
    return current.isEndOfWord
}
}
const trie = new Trie();

trie.insert("CAT");
trie.insert("DOG");

console.log(trie.search("MAT"));
console.log(trie.search("DOG"));