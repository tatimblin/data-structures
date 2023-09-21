import { LinkedList } from "./LinkedList.js";

describe("LinkedList", () => {
  describe("push()", () => {
    it("adds node to head of linked list", () => {
      const LL = new LinkedList();

      LL.push("My first node");

      expect(LL.getFrom(0)).toEqual("My first node");
      expect(LL.size).toEqual(1);
    });

    it("adds multiple nodes to linked list", () => {
      const LL = new LinkedList();

      LL.push("My first node");
      LL.push("My second node");
      LL.push("My third node");

      expect(LL.size).toEqual(3);
    });
  });

  describe("pop()" , () => {
    it("removes head node when size is one", () => {
      const LL = new LinkedList();

      LL.push("My first node");
      LL.pop();

      expect(LL.size).toEqual(0);
    });

    it("removes tail node", () => {
      const LL = new LinkedList();

      LL.push("My first node");
      LL.push("My second node");
      LL.pop();

      expect(LL.size).toEqual(1);
      expect(() => LL.getFrom(1)).toThrow("Index is out of bounds");
    });

    it("removes tail node of a large linked list", () => {
      const LL = new LinkedList();

      LL.push("My first node");
      LL.push("My second node");
      LL.push("My third node");
      LL.push("My fourth node");
      LL.push("My fifth node");
      LL.push("My sixth node");
      LL.push("My seventh node");
      LL.pop();

      expect(LL.size).toEqual(6);
      expect(() => LL.getFrom(6)).toThrow("Index is out of bounds");
    });
  });

  describe("insertAt()" , () => {
    it("inserts a node at the head of an empty linked list", () => {
      const LL = new LinkedList();

      LL.insertAt("My first node", 0);

      expect(LL.getFrom(0)).toEqual("My first node");
    });

    it("inserts a node at the middle of a populated linked list", () => {
      const LL = new LinkedList();

      LL.push("My first node");
      LL.push("My third node");
      LL.insertAt("My second node", 1);

      expect(LL.getFrom(1)).toEqual("My second node");
    });

    it("inserts a node at the head of a populated linked list", () => {
      const LL = new LinkedList();

      LL.push("My second node");
      LL.push("My third node");
      LL.insertAt("My first node", 0);

      expect(LL.getFrom(0)).toEqual("My first node");
    });
  
    it("inserts a node at the tail of a populated linked list", () => {
      const LL = new LinkedList();

      LL.push("My first node");
      LL.push("My second node");
      LL.insertAt("My third node", 2);

      expect(LL.getFrom(2)).toEqual("My third node");
    });
  });

  describe("getFrom()", () => {
    it("gets from nth position in linked list", () => {
      const LL = new LinkedList();

      LL.push("My first node");
      LL.push("My second node");
      LL.push("My third node");

      expect(LL.getFrom(0)).toEqual("My first node");
      expect(LL.getFrom(1)).toEqual("My second node");
      expect(LL.getFrom(2)).toEqual("My third node");
    });

    it("throws an error when index is out of bounds", () => {
      const LL = new LinkedList();

      LL.push("My first node");
      LL.push("My second node");
      LL.push("My third node");

      expect(() => LL.getFrom(-1)).toThrow("Index is out of bounds");
      expect(() => LL.getFrom(3)).toThrow("Index is out of bounds");
    });
  });

  describe("removeFrom()" , () => {});

  describe("removeElement()" , () => {});

  describe("indexOf()" , () => {});
})