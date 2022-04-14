// Queue

// Queue implementaion

class Queue {
  constructor() {
    this.queue = [];
    this.size = 0;
  }
  enqueue(item) {
    // this.queue.push(item);    //we can use push() method to push item into queue
    this.queue[this.size] = item;
    this.size += 1;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is Empty");
    } else {
      let popedItem = this.queue.shift(); // removing the first item from queue
      this.size -= 1; // decrementing of size
      return popedItem; // returning removed item
    }
  }

  peek() {
    if (this.isEmpty()) {
      //checking whether queue is empty or not
      console.log("Queue is Empty");
    } else {
      return this.queue[0]; //returning first item of queue
    }
  }

  isEmpty() {
    return this.size === 0;
  }

  clear() {
    this.queue = [];
    this.size = 0;
  }

  print() {
    if (this.isEmpty()) {
      //checking whether queue is empty or not
      console.log("Queue is Empty");
    } else {
      for (let i in this.queue) {
        console.log(`${i} item is : ${this.queue[i]}`);
      }
    }
  }
}

q = new Queue();

console.log(q.isEmpty());
q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.enqueue("d");

console.log('First item is :', q.peek());

q.print();
console.log("poped item is :", q.dequeue());
q.print();
q.enqueue("e");
console.log("poped item is :", q.dequeue());
q.print();

console.log('First item is :', q.peek());

q.clear();
console.log(q.isEmpty());



//queue implementaion using js methods

const collection = [];

console.log(collection.length); //we can whether empty or not
collection.push("a"); //enqueue
collection.push("b");
collection.push("c");
collection.push("d");
console.log(collection);

console.log('First item is :', collection[0]); //peek

console.log("poped item is :", collection.shift()); //dequeue
console.log(collection);
console.log("poped item is :", collection.shift());
console.log(collection);

console.log('First item is :', collection[0]);
console.log(collection.length);



