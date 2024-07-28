class Node {
    constructor() {
        this.children = {};
        this.end = false;
    }
}
class Trie {
    constructor() {
        this.root = new Node();
    }
    insert(value) {
        let temp = this.root;
        for (let i = 0; i < value.length; i++) {
            let char = value[i];
            if (!temp.children[char]) {
                temp.children[char] = new Node();
            }
            temp = temp.children[char];
        }
        temp.end = true;
    }
    // Prints all the words stored in the trie
    print() {
        this.printTravel(this.root, "");
    }
    printTravel(head, pre) {
        if (head === null) {
            return;
        }
        if (head.end) {
            console.log(pre);
        }
        for (let char in head.children) {
            const child = head.children[char];
            this.printTravel(child, pre + char);
        }
    }

    // Searches if a given word is present in the trie
    search(word) {
        let temp = this.root;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!temp.children[char]) {
                return false;
            }
            temp = temp.children[char];
        }
        return temp.end;
    }

    // Checks if a given word is a prefix of any stored word
    // prefix(word) {
    //     let temp = this.root;
    //     for (let i = 0; i < word.length; i++) {
    //         const char = word[i];
    //         if (!temp.children[char]) {
    //             return false;
    //         }
    //         temp = temp.children[char];
    //     }
    //     return true;
    // }

    // Finds the longest common prefix among all stored words
    longestCommonPrefix() {
        let prefix = '';
        let currentNode = this.root;
        while (Object.keys(currentNode.children).length === 1 && !currentNode.end) {
            const char = Object.keys(currentNode.children)[0];
            prefix += char;
            currentNode = currentNode.children[char];
        }
        return prefix;
    }

    // startingletter(word){
    //     let temp=this.root;
    //     for(let i=0;i<word.length;i++){
    //         const char=word[i];
    //         if(!temp.children[char]){
    //             return false;
    //         }
    //         temp=temp.children[char];
    //     }
    //     return word
    //   }


    // Finds all words with a given suffix
    wordsWithSuffix(suffix) {
        const words = [];
        this.findWordsWithSuffix(this.root, "", suffix, words);
        return words;
    }

    findWordsWithSuffix(node, pre, suffix, words) {
        if (node === null) {
            return;
        }
        if (node.end && pre.endsWith(suffix)) {
            words.push(pre);
        }
        for (let char in node.children) {
            const child = node.children[char];
            this.findWordsWithSuffix(child, pre + char, suffix, words);
        }
    }

    // Finds all words with a given prefix
    wordsWithPrefix(prefix) {
        const words = [];
        let temp = this.root;
        for (let i = 0; i < prefix.length; i++) {
            const char = prefix[i];
            if (!temp.children[char]) {
                return words;
            }
            temp = temp.children[char];
        }
        this.findWordsWithPrefix(temp, prefix, words);
        return words;
    }

    findWordsWithPrefix(node,pre,words) {
        if (node === null) {
            return;
        }
        if (node.end) {
            words.push(pre);
        }
        for (let char in node.children) {
            const child = node.children[char];
            this.findWordsWithPrefix(child, pre + char, words);
        }
    }
}

let trie = new Trie();

trie.insert("arif");
trie.insert("asif");
trie.insert("arif mohammed");
trie.insert("mohammed arif");

console.log("Words with suffix :", trie.wordsWithSuffix("ed"));
console.log("Words with prefix :", trie.wordsWithPrefix("a")); 

console.log(trie.search("arif"));
// console.log(trie.prefix("moh"));
// console.log(trie.longestCommonPrefix());
// console.log(trie.startingletter("a"));



trie.print()
