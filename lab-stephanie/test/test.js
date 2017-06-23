'use strict';

let LinkedList = require('../lib/linkedlist.js');
let expect = require('expect');

describe('testing LinkedList methods', () => {
  describe('testing appendNode', () =>{
    it('should append 20', () =>{
      let test = new LinkedList(10);
      test.appendNode(new LinkedList(20));
      console.log(test);
      expect(test.next.value).toEqual(20);
    });
    it('should append 30', () =>{
      let test = new LinkedList(10);
      test.appendNode(new LinkedList(30));
      expect(test.next.value).toEqual(30);
    });
    it('should append 40', () =>{
      let test = new LinkedList(10);
      test.appendNode(new LinkedList(40));
      expect(test.next.value).toEqual(40);
    });
  });

  describe('testing removeNode', () =>{
    it('should remove 40', () =>{
      let test = new LinkedList(10);
      test.appendNode(new LinkedList(40));
      test.removeNode(40);
      expect(test.next.value).toEqual(null);
    });
    it('should append 30', () =>{
      let test = new LinkedList(10);
      test.appendNode(new LinkedList(30));
      test.removeNode(30);
      expect(test.next.value).toEqual(null);
    });
    it('should append 20', () =>{
      let test = new LinkedList(10);
      test.appendNode(new LinkedList(20));
      test.removeNode(20);
      expect(test.next.value).toEqual(null);
    });
  });

  describe('testing reverseNodes', () =>{
    it('should reverseNodes', () =>{
      let test = new LinkedList(10);
      test.appendNode(new LinkedList(20));
      test.appendNode(new LinkedList(30));
      test.appendNode(new LinkedList(40));
      test.reverseNodes();
      expect(test.value).toEqual(40);
      expect(test(1).value).toEqual(30);
      expect(test(2).value).toEqual(20);
    });
  });

  describe('testing findMiddle', () =>{
    it('should find middle value: 20', () =>{
      let test = new LinkedList(10);
      test.appendNode(new LinkedList(20));
      test.appendNode(new LinkedList(30));
      test.appendNode(new LinkedList(40));
      console.log(test);
      expect(test.findMiddle()).toEqual(20);
    });
  });
});
