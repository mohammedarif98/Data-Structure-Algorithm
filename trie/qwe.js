
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
}
let trie = new Trie();

trie.insert("arif");
trie.insert("asif");
trie.insert("arif mohammed");
trie.insert("mohammed arif");
console.log("Words with prefix :", trie.wordsWithSuffix("d")); 
console.log(trie.search("arif"));





