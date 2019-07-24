class BinarySearchTree {

    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null
    }

    _replaceWith(node) {
        if (this.parent) {
            if (this == this.parent.left) {
                this.parent.left = node;
            }
            else if (this == this.parent.right) {
                this.parent.right = node;
            }

            if (node) {
                node.parent = this.parent
            }
        }
        else {
            if (node) {
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            }
            else {
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }
    }

    _findMin() {
        if (!this.left) {
            return this;
        }
        return this.left._findMin();
    }


    find(key) {
        if (this.key === key) {
            return this.value
        }
        else if (key < this.key && this.left) {
            return this.left.find(key)
        }
        else if (key > this.key && this.right) {
            return this.right.find(key)
        }
        else {
            throw new Error('key error')
        }
    }

    insert(key, value) {
        if (this.key == null) {
            this.key = key;
            this.value = value;
        }
        else if (key < this.key) {
            if (this.left === null) {
                this.left = new BinarySearchTree(key, value)
            }
            else { this.left.insert(key, value) }
        }

        else {
            if (this.right === null) {
                this.right = new BinarySearchTree(key, value, this)
            }
            else {
                this.right.insert(key, value)
            }
        }
    }

    remove(key) {
        if (this.key === key) {
            if (this.left && this.right) {
                const successor = this.right._findMin();
                this.key = success.key;
                this.value = successor.value;
                successor.remove(successor.key)
            }
            else if (this.left) {
                this._replaceWith(this.left);
            }
            else if (this.right) {
                this._replaceWith(this.right);
            }
            else {
                this._replaceWith(null)
            }
        }
        else if (key < this.key && this.left) {
            this.left.remove(key);
        }
        else if (key > this.key && this.right) {
            this.right.remove(key);
        }
        else {
            throw new Error('Key Error')
        }
    }

}




// const binaryExample = new BinarySearchTree(1, 1);
// binaryExample.insert(2, 2)
// binaryExample.insert(3, 3)



// console.log(binaryExample)
// console.log("binaryExample.right.parent", binaryExample.right.parent)

// console.log(binaryExample.find(3))

function tree(t) {
    if (!t) {
        return 0;
    }

    return tree(t.left) + t.value + tree(t.right)
}

// console.log(tree(binaryExample))


const heightExample = new BinarySearchTree()
heightExample.insert(5, 5)
heightExample.insert(3, 3)
heightExample.insert(3, 3)
heightExample.insert(3, 3)
heightExample.insert(3, 3)
heightExample.insert(3, 3)

function findMin(tree) {
    if (!tree.left) {
        return tree;
    }
    minCounter++
    return findMin(tree.left);
}

function findMax(tree) {
    if (!tree.right) {
        return tree;
    }
    maxCounter++
    return findMax(tree.right)
}

let minCounter = 1;
let maxCounter = 1;

function height(tree) {
    if (tree.key === null) {
        return 0
    }

    if (tree.parent === null && tree.left === null && tree.right === null) {
        let counter = 1;
        return counter
    }



    findMin(tree);
    findMax(tree);
    return (maxCounter >= minCounter) ? maxCounter : minCounter

    // if (!tree.left)
    // return counter

    // else if (tree.){
    // counter++
    // return counter}
    // if (tree.right)
    //  { return this.right.height()}

}

console.log(height(heightExample))
console.log(heightExample)