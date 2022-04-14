// Stack Implementaion (FILO)

class Stack {
  constructor() {
    this.stack = [];
    this.size = 0;
  }

  push(item) {
    this.stack.push(item); //pushing item into stack
    this.size += 1; // increasing size
  }

  pop() {
    let popedItem = this.stack.pop(); // removing item from stack
    this.size -= 1; // decreasing size
    return popedItem; // returning poped item
  }

  peek() {
    return this.stack[this.size - 1]; // returning last item of stack
  }

  isEmpty() {
    return this.size === 0; 
  }

  print() {
    for (let i in this.stack) {
      console.log(`${i} item is ${this.stack[i]}`);
    }
  }
}

let s = new Stack(); 

console.log(s.isEmpty());

s.push("a");
s.push("b");
s.push("c");
s.push("d");

s.print();

console.log("poped item ", s.pop());
s.print();
console.log("poped item ", s.pop());
s.print();

console.log(s.peek());
console.log(s.size);

s.push("e");
s.push("f");

s.print();

// stack implemetatipon using js methods

const collection = [];

collection.push("a"); // pushing item into stack
collection.push("b");
collection.push("c");
collection.push("d");

console.log(collection); // printing stack

console.log("poped item ", collection.pop()); // poping item from stack
console.log(collection);

console.log(collection.length); // checking size of stack



