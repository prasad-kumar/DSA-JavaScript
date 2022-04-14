// Hash table implementation

class HashTable {
  constructor(max) {
    this.max = max;
    this.hashTable = [];
  }

  hash(string) {
    let hash = 0;
    for (let i in string) {
      hash += string.charCodeAt(i);
    }
    return hash % this.max;
  }

  add(key, value) {
    let index = this.hash(key);

    if (this.hashTable[index] === undefined) {
      // checking whether given key hash index is empty or not
      this.hashTable[index] = [[key, value]];
    } else {
      let found = false;
      for (let i in this.hashTable[index]) {
        if (this.hashTable[index][i][0] === key) {
          this.hashTable[index][i][1] = value; // updating existed value
          found = true;
          break;
        }
      }
      if (found === false) {
        this.hashTable[index].push([key, value]); // pushing new key,pair
      }
    }
  }

  remove(key) {
    let index = this.hash(key);

    if (this.hashTable[index] === undefined) {
      // checking whether given key hash index is empty or not
      console.log("Given Key not exist");
      return;
    }

    if (
      this.hashTable[index].length === 1 &&
      this.hashTable[index][0][0] === key
    ) {
      delete this.hashTable[index];
    } else {
      for (let i in this.hashTable[index]) {
        if (this.hashTable[index][i][0] === key) {
          delete this.hashTable[index][i];
          break;
        } else {
          console.log("Given Key not found");
        }
      }
    }
  }

  get(key) {
    let index = this.hash(key);

    if (this.hashTable[index] === undefined) {
      // checking whether given key hash index is empty or not
      console.log("Given Key not exist");
    }

    if (
      this.hashTable[index].length === 1 &&
      this.hashTable[index][0][0] === key
    ) {
      console.log(this.hashTable[index][0]);
    } else {
      for (let i in this.hashTable[index]) {
        if (this.hashTable[index][i][0] === key) {
          console.log(this.hashTable[index][i]);
          break;
        } else {
          console.log("Given key not found");
        }
      }
    }
  }
}

let h = new HashTable(10);

h.add("prasad", 24);
h.add("maruthi", 24);
h.add("sai", 24);
h.add("divya", 24);
h.add("rishi", 24);
h.add("raghu", 23);

console.log(h.hashTable);

h.add("divya", 23); // updating value
h.add("prasad", 23);

h.remove("ramesh"); // here ramesh hash key is 0 so hashTable[0] is empty so it print given key not exist

h.remove("rajini"); // here rajini hash key is 7 so hashTable[7] has one item ([ 'sai', 24 ]) but given key is not matched with existing key so it prints Given key not found

h.get("prasad"); // [ 'prasad', 23 ]

h.get("john"); //// here john hash key is 1 so hashTable[1] has one item ([ 'divya', 23 ]) but given key is not matched with existing key so it prints Given key not found

console.log(h.hashTable);
