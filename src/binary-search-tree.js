const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');


module.exports = class BinarySearchTree {
  constructor() {
    this.rootBinary = null
  }

  root() {
    return this.rootBinary
  }

  add( data ) {
    const newNode = new Node(data)
    this.rootBinary === null ? this.rootBinary = newNode : this.addNode(this.rootBinary, newNode)
  }

  addNode( rootBinary, newNode ) {
    if (newNode.data < rootBinary.data) {
      rootBinary.left === null ? rootBinary.left = newNode : this.addNode(rootBinary.left, newNode)
    } else
     if (newNode.data > rootBinary.data) {
      rootBinary.right === null ? rootBinary.right = newNode : this.addNode(rootBinary.right, newNode)
    }
  }

  has( data ) {
    return this.getHas(this.tree, data)
  }

  getHas( tree, data ) {
    if (tree.data === data) {
      return true 
    } else 
    if (tree.data > data) {
      return tree.left === null ? false : this.getHas(tree.left, data) 
    } else 
    if (tree.data < data) {
      return tree.right === null ? false : this.getHas(tree.right, data) 
    }
  }

  find(data) {
    let current = this.root() 
        while (current.data !== data) {
            if (data < current.data) {
                current = current.left
            } else {
                current = current.right
            }
            if (current === null) {
                return null
            }
        }
        return current
  }
  getFind( tree, data ) {
    if (tree === null) {
      return null 
    } else
     if (tree.data === data) {
      return tree 
    } else
     if (tree.data > data) {
      return tree.left === null ? null : this.getFind(tree.left, data) 
    } else
     if (tree.data < data) {
      return tree.right === null ? null : this.getFind(tree.right, data) 
    }
  }

  remove() {}

  min() {}

  max() {}
}