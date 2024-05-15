import { LinkedList } from "./LinkedList.js";

describe("LinkedList", () => {
  describe("push()", () => {
    it("adds node to head of linked list", () => {
      const LL = new LinkedList<string>();

      LL.push("My first node");

      expect(LL.getElementByIndex(0)).toEqual("My first node");
      expect(LL.size).toEqual(1);
    });

    it("adds multiple nodes to linked list", () => {
      const LL = new LinkedList<string>();

      LL.push("My first node");
      LL.push("My second node");
      LL.push("My third node");

      expect(LL.size).toEqual(3);
    });
  });

  describe("pop()" , () => {
    it("removes head node when size is one", () => {
      const LL = new LinkedList<string>();

      LL.push("My first node");
      LL.pop();

      expect(LL.size).toEqual(0);
    });

    it("removes tail node", () => {
      const LL = new LinkedList<string>();

      LL.push("My first node");
      LL.push("My second node");
      LL.pop();

      expect(LL.size).toEqual(1);
      expect(() => LL.getElementByIndex(1)).toThrow("Index is out of bounds");
    });

    it("removes tail node of a large linked list", () => {
      const LL = new LinkedList<string>();

      LL.push("My first node");
      LL.push("My second node");
      LL.push("My third node");
      LL.push("My fourth node");
      LL.push("My fifth node");
      LL.push("My sixth node");
      LL.push("My seventh node");

      expect(LL.pop()).toEqual("My seventh node");
      expect(LL.size).toEqual(6);
      expect(() => LL.getElementByIndex(6)).toThrow("Index is out of bounds");
    });
  });

  describe("insertElementAtIndex()" , () => {
    it("inserts a node at the head of an empty linked list", () => {
      const LL = new LinkedList<string>();

      LL.insertElementAtIndex("My first node", 0);

      expect(LL.getElementByIndex(0)).toEqual("My first node");
    });

    it("inserts a node at the middle of a populated linked list", () => {
      const LL = new LinkedList<string>();

      LL.push("My first node");
      LL.push("My third node");
      LL.insertElementAtIndex("My second node", 1);

      expect(LL.getElementByIndex(1)).toEqual("My second node");
    });

    it("inserts a node at the head of a populated linked list", () => {
      const LL = new LinkedList<string>();

      LL.push("My second node");
      LL.push("My third node");
      LL.insertElementAtIndex("My first node", 0);

      expect(LL.getElementByIndex(0)).toEqual("My first node");
      expect(LL.getElementByIndex(1)).toEqual("My second node");
      expect(LL.getElementByIndex(2)).toEqual("My third node");
    });
  
    it("inserts a node at the tail of a populated linked list", () => {
      const LL = new LinkedList<string>();

      LL.push("My first node");
      LL.push("My second node");
      LL.insertElementAtIndex("My third node", 2);

      expect(LL.getElementByIndex(2)).toEqual("My third node");
    });
  });

  describe("getElementByIndex()", () => {
    it("gets from nth position in linked list", () => {
      const LL = new LinkedList<string>();

      LL.push("My first node");
      LL.push("My second node");
      LL.push("My third node");

      expect(LL.getElementByIndex(0)).toEqual("My first node");
      expect(LL.getElementByIndex(1)).toEqual("My second node");
      expect(LL.getElementByIndex(2)).toEqual("My third node");
    });

    it("throws an error when index is out of bounds", () => {
      const LL = new LinkedList<string>();

      LL.push("My first node");
      LL.push("My second node");
      LL.push("My third node");

      expect(() => LL.getElementByIndex(-1)).toThrow("Index is out of bounds");
      expect(() => LL.getElementByIndex(3)).toThrow("Index is out of bounds");
    });
  });

  describe("removeElementByElement()" , () => {
    it("removes the head of a linked list with a single node", () => {
      const LL = new LinkedList<number>();

      LL.push(1);

      expect(LL.removeElementByElement(0)).toEqual(1);
      expect(LL.size).toEqual(0);
    });

    it("removes a node from the head of a linked list", () => {
      const LL = new LinkedList<number>();

      LL.push(1);
      LL.push(2);
      LL.push(3);

      expect(LL.removeElementByElement(0)).toEqual(1);
      expect(LL.size).toEqual(2);
    });

    it("removes a node from the middle of a linked list", () => {
      const LL = new LinkedList<number>();

      LL.push(1);
      LL.push(2);
      LL.push(3);
      LL.push(4);

      expect(LL.removeElementByElement(2)).toEqual(3);
      expect(LL.size).toEqual(3);
    });

    it("removes a node from the tail of a linked list", () => {
      const LL = new LinkedList<number>();

      LL.push(1);
      LL.push(2);
      LL.push(3);

      expect(LL.removeElementByElement(2)).toEqual(3);
      expect(LL.size).toEqual(2);
    });

    it("removes mulitple nodes from a linked list", () => {
      const LL = new LinkedList<number>();

      LL.push(1);
      LL.push(2);
      LL.push(3);

      expect(LL.removeElementByElement(0)).toEqual(1);
      expect(LL.removeElementByElement(1)).toEqual(3);
      expect(LL.size).toEqual(1);
    });

    it("removes mulitple consecutive nodes from a linked list", () => {
      const LL = new LinkedList<number>();

      LL.push(1);
      LL.push(2);
      LL.push(3);

      expect(LL.removeElementByElement(1)).toEqual(2);
      expect(LL.removeElementByElement(1)).toEqual(3);
      expect(LL.size).toEqual(1);
    });

    it("throws an error when index is out of bounds", () => {
      const LL = new LinkedList<number>();

      LL.push(1);
      LL.push(2);
      LL.push(3);

      expect(() => LL.removeElementByElement(-1)).toThrow("Index is out of bounds");
      expect(() => LL.removeElementByElement(3)).toThrow("Index is out of bounds");
    });
  });

  describe("removeElementByElement()" , () => {
    it("removes the head of a linked list with a single node", () => {
      const LL = new LinkedList<number>();

      LL.push(1);

      expect(LL.removeElementByElement(1)).toEqual(0);
      expect(LL.size).toEqual(0);
    });

    it("removes a node from the head of a linked list", () => {
      const LL = new LinkedList<number>();

      LL.push(1);
      LL.push(2);
      LL.push(3);

      expect(LL.removeElementByElement(1)).toEqual(0);
      expect(LL.size).toEqual(2);
    });

    it("removes a node from the middle of a linked list", () => {
      const LL = new LinkedList<number>();

      LL.push(1);
      LL.push(2);
      LL.push(3);
      LL.push(4);

      expect(LL.removeElementByElement(3)).toEqual(2);
      expect(LL.size).toEqual(3);
    });

    it("removes a node from the middle of a linked list of arrays", () => {
      const LL = new LinkedList<number[]>();

      LL.push([1, 2, 3]);
      LL.push([2, 3, 4]);
      LL.push([3, 4, 5]);
      LL.push([4, 5, 6]);

      expect(LL.removeElementByElement([3, 4, 5])).toEqual(2);
      expect(LL.size).toEqual(3);
    });

    it("removes a node from the middle of a linked list of objects", () => {
      const LL = new LinkedList<{ first: string, last: string }>();

      LL.push({ first: "Andrew", last: "Timblin"});
      LL.push({ first: "Barbara", last: "Timblin"});
      LL.push({ first: "Tristan", last: "Timblin"});
      LL.push({ first: "Jeremy", last: "Timblin"});

      expect(LL.removeElementByElement({ first: "Tristan", last: "Timblin"})).toEqual(2);
      expect(LL.size).toEqual(3);
    });

    it("removes a node from the middle of a linked list of deep nested objects", () => {
      const LL = new LinkedList<{ name: string, industry?: string[], distance: {[key: string]: number}}>();

      LL.push({ name: "San Francsico", industry: ["technology"], distance: { "San Jose": 48.5 }});
      LL.push({ name: "San Jose", industry: ["manufacturing"], distance: { "Sausalito": 62.1}});
      LL.push({ name: "Mountain View", industry: ["technology"], distance: { "San Francisco": 39.3 }});
      LL.push({ name: "Sausalito", distance: { "Mountain View": 49.7 }});

      expect(LL.removeElementByElement({ name: "San Francsico", industry: ["technology"], distance: { "San Jose": 48.5 }})).toEqual(0);
      expect(LL.size).toEqual(3);
    });

    it("removes a node from the tail of a linked list", () => {
      const LL = new LinkedList<number>();

      LL.push(1);
      LL.push(2);
      LL.push(3);

      expect(LL.removeElementByElement(3)).toEqual(2);
      expect(LL.size).toEqual(2);
    });

    it("throws an error when index is out of bounds", () => {
      const LL = new LinkedList<number>();

      LL.push(1);
      LL.push(2);
      LL.push(3);

      expect(LL.removeElementByElement(0)).toEqual(-1);
      expect(LL.removeElementByElement(4)).toEqual(-1);
    });
  });

  describe("getIndexByElement()" , () => {
    it("gets the index of the head of a linked list", () => {
      const LL = new LinkedList<number>();

      expect(LL.getIndexByElement(1)).toEqual(-1);

      LL.push(1);

      expect(LL.getIndexByElement(1)).toEqual(0);
    });

    it("gets the index of a middle node in a linked list", () => {
      const LL = new LinkedList<number>();

      LL.push(1);
      LL.push(2);
      LL.push(3);

      expect(LL.getIndexByElement(2)).toEqual(1);
    });

    it("gets the index of the tail of a linked list", () => {
      const LL = new LinkedList<number>();

      LL.push(1);
      LL.push(2);
      LL.push(3);

      expect(LL.getIndexByElement(3)).toEqual(2);
    });

    it("returns -1 when the element is not found", () => {
      const LL = new LinkedList<number>();

      LL.push(1);
      LL.push(3);
      LL.push(5);

      expect(LL.getIndexByElement(2)).toEqual(-1);
    });
  });

  describe("toArray()", () => {
    it("returns complete linked list as a list of elements", () => {
      const LL = new LinkedList<string>();

      LL.push("My first node");
      LL.push("My second node");
      LL.push("My third node");

      expect(LL.toArray()).toEqual(["My first node", "My second node", "My third node"]);
    });

    it("returns partial linked list as a list of elements", () => {
      const LL = new LinkedList<string>();

      LL.push("My first node");
      LL.push("My second node");
      LL.push("My third node");
      LL.push("My fourth node");
      LL.push("My fifth node");

      expect(LL.toArray(1, 3)).toEqual(["My second node", "My third node", "My fourth node"]);
    });

    it("returns partial linked list as a list of elements with range overload", () => {
      const LL = new LinkedList<string>();

      LL.push("My first node");
      LL.push("My second node");
      LL.push("My third node");

      expect(LL.toArray(1, 5)).toEqual(["My second node", "My third node"]);
    });
  });
})