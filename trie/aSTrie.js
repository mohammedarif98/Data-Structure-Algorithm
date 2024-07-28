class Node {
    constructor() {
      this.children = {};
      this.isEnd = false;
    }
  }
  class SuffixTrie {
    constructor() {
      this.root = new Node();
    }
    insert(word) {
      for (let i = 0; i < word.length; i++) {
        const suffix = word.substring(i);
        this.insertSuffix(suffix);
      }
    }
    insertSuffix(suffix) {
      let temp = this.root;
      for (let i = 0; i < suffix.length; i++) {
        const char = suffix[i];
        if (!temp.children[char]) {
          temp.children[char] = new Node();
        }
        temp = temp.children[char];
      }
      temp.isEnd = true;
    }
    search(word) {
      let currentNode = this.root;
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!currentNode.children[char]) {
          return false;
        }
        currentNode = currentNode.children[char];
      }
      return currentNode.isEnd;
    }
  }
  const suffixTrie = new SuffixTrie();
  suffixTrie.insert("banana");
  console.log(suffixTrie.search("ana"));  // Output: true
  console.log(suffixTrie.search("nana")); // Output: true
  console.log(suffixTrie.search("apple")); // Output: false
