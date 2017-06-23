'use strict';

class SLL {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
  appendNode(node) {
    if(!(node instanceof SLL))
      return null;
    if(!this.next) {
      this.next = node;
      return;
    }
    this.next.appendNode(node);
  }
  ForEach(callback) {
    let current = this;
    while(current) {
      callback(current, this);
      current = current.next;
    }
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

let list = new SLL(4);
let middle = head.findMiddle();

try {
  list.appendNode(new SLL(87));
  list.appendNode(new SLL(87));
} catch (err){
}
