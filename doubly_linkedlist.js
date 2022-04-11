// Doubly Linkedlist in JavaScript

class Node {
    constructor(data, next = null, prev = null) {
      this.data = data;
      this.next = next;
      this.prev = prev;
    }
  }
  
  class DoublyLinkedlist {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    firstNode(data) {
      if (this.head) {
        let node = new Node(data, this.head);
        this.head.prev = node;
        this.head = node;
        this.size++;
      } else {
        this.head = new Node(data, this.head);
        this.size++;
      }
    }
  
    lastNode(data) {
      if (!this.head) {
        this.firstNode(data);
        return;
      }
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(data, null, current);
      this.size++;
    }
  
    atIndex(data, idx) {
      if (idx < 0 || idx > this.size) {
        throw Error("invalid index");
      }
  
      if (idx === 0) {
        this.firstNode(data);
        return;
      }
      let current = this.head;
      let previous;
      let count = 0;
      while (count < idx) {
        previous = current;
        current = current.next;
        count += 1;
      }
      let node = new Node(data, previous.next, previous);
      if (node.next) {
        node.next.prev = node;
      }
      previous.next = node;
    }
  
    removeNodeAt(idx) {
      if (idx < 0 || idx >= this.size) {
        throw Error("invalid index");
      }
  
      if (idx === 0) {
        this.head = this.head.next;
        return;
      }
      let current = this.head;
      let previous;
      let count = 0;
      while (count < idx) {
        previous = current;
        current = current.next;
        count += 1;
      }
      previous.next = current.next;
      current.next.prev = previous;
    }
  
    printForward() {
      if (!this.head) {
        console.log("empty list");
        return;
      }
      let llstr = "";
      let current = this.head;
      while (current) {
        llstr += current.next
          ? String(current.data) + " --> "
          : String(current.data);
        current = current.next;
      }
      console.log(llstr);
    }
  
    getLastNode() {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      return current;
    }
  
    printBackward() {
      if (!this.head) {
        console.log("empty list");
        return;
      }
      let llstr = "";
      let current = this.getLastNode();
      while (current) {
        llstr += current.prev
          ? String(current.data) + " <-- "
          : String(current.data);
        current = current.prev;
      }
      console.log(llstr);
    }
  
    clearlist() {
      this.head = null;
      this.size = 0;
    }
  }
  
  let dl = new DoublyLinkedlist();
  
  dl.firstNode(1);
  dl.lastNode(2);
  dl.lastNode(4);
  
  dl.printForward();
  dl.printBackward();
  
  dl.atIndex(3, 2);
  
  dl.printForward();
  dl.printBackward();
  
  dl.removeNodeAt(1);
  
  dl.printForward();
  dl.printBackward();
  
  console.log(dl.size);
  
  dl.clearlist();
  
  console.log(dl.size);
  
  dl.printForward();
  dl.printBackward();
  
  
  