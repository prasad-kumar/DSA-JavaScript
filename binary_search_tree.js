// binary search tree implementation

class BinarySearchTree {
  constructor(data = null) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  addChild(data) {
    if (this.data === data) {
      // checking if given data is equal to current data. do nothing if its equal
      return;
    }

    if (this.data !== null) {
      // checking current data is null or not
      if (data < this.data) {
        if (this.left !== null) {
          this.left.addChild(data);
        } else {
          this.left = new BinarySearchTree(data);
        }
      } else if (data > this.data) {
        if (this.right !== null) {
          this.right.addChild(data);
        } else {
          this.right = new BinarySearchTree(data);
        }
      }
    } else {
      this.data = data;
    }
  }

  print() {
    let items = [];
    if (this.left !== null) {
      items = items.concat(this.left.print()); // concatenating
    }

    items = items.concat(this.data);

    if (this.right !== null) {
      items = items.concat(this.right.print());
    }
    return items;
  }

  search(data) {
    if (data < this.data) {
      if (this.left === null) {
        return "NOT FOUND";
      }
      return this.left.search(data);
    } else if (data > this.data) {
      if (this.right === null) {
        return "NOT FOUND IN TREE";
      }
      return this.right.search(data);
    } else {
      return "FOUND IN TREE";
    }

    // 2nd way
    // if (this.data === data) {
    //   return 'FOUND IN TREE';
    // }

    // if (data < this.data) {
    //   if (this.left !== null) {
    //     return this.left.search(data);
    //   } else {
    //     return 'NOT FOUND IN TREE';
    //   }
    // } else if (data > this.data) {
    //   if (this.right !== null) {
    //     return this.right.search(data);
    //   } else {
    //     return 'NOT FOUND IN TREE';
    //   }
    // }
  }

  delete(data) {
    if (data < this.data) {
      if (this.left !== null) {
        this.left = this.left.delete(data);
      }
    } else if (data > this.data) {
      if (this.right !== null) {
        this.right = this.right.delete(data);
      }
    } else {
      if (this.left === null && this.right === null) {
        return null;
      }
      if (this.left === null) {
        return this.right;
      }
      if (this.right === null) {
        return this.left;
      }

      let min = this.right.findMin(); //if you want to assign subtree to right then finMin val and give it to data(root) or if you want to assign subtree to left then finMax val and give it to data(root)
      self.data = min;
      this.right = this.right.delete();
    }
    return this;
  }

  findMin() {
    if (this.left === null) {
      return this.data;
    }
    return this.left.findMin();
  }
}

const bst = new BinarySearchTree();

bst.addChild(5);
bst.addChild(3);
bst.addChild(4);
bst.addChild(9);
bst.addChild(14);
bst.addChild(13);
bst.addChild(18);
bst.addChild(15);
bst.addChild(8);
bst.addChild(1);

console.log(bst.print());

console.log(bst.search(88)); // NOT FOUND IN TREE
console.log(bst.search(8)); // FOUND IN TREE

bst.delete(13);

console.log(bst.print());
