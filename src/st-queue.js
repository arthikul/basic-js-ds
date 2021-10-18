  
const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

module.exports = class Queue {
  constructor() {
    this.foot = null;
    this.head = null;
  }

  getUnderlyingList() {
    return this.foot;
  }

  enqueue(value) {
    const node = new ListNode(value);

    if (this.foot) {
      this.head.next = node;
      this.head = node;
    } else {
        this.foot = node;
        this.head = node;
    }
  }

  dequeue() {
    let result = this.foot.value;
    this.foot = this.foot.next;
    return result;
  }
}