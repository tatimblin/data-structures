import { LinkedList } from "./LinkedList.js";

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
