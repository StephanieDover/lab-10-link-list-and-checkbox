'use strict';

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  appendNode(node) {
    if(!(node instanceof LinkedList))
      return null;
    if(!this.next) {
      this.next = node;
      return;
    }
    this.next.appendNode(node);
  }

  removeNode(node) {
    console.log(node);
    if(!(node instanceof LinkedList))
      return null;
    node = null;
    return;
    }

  ForEach(callback) {
    let current = this;
    while(current) {
      callback(current, this);
      current = current.next;
    }
  }

  reverseNodes() {
    let head = new LinkedList(0);
    let prepend = this;
    while(prepend.next) {
      prepend = this.next;
    prepend = head;
    head = prepend;
  }
    return LinkedList;
  }

  findMiddle(){
    let slow, fast;
    slow = fast = this;
    while(fast && fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
}

module.exports = LinkedList;
