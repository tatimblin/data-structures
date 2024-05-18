import { LinkedList } from "./LinkedList.js";

describe("insertAt()" , () => {
  it("inserts a node at the head of an empty linked list", () => {
    const LL = new LinkedList<string>();

    LL.insertAt("My first node", 0);

    expect(LL.getByIndex(0)).toEqual("My first node");
  });

  it("inserts a node at the middle of a populated linked list", () => {
    const LL = new LinkedList<string>();

    LL.push("My first node");
    LL.push("My third node");
    LL.insertAt("My second node", 1);

    expect(LL.getByIndex(1)).toEqual("My second node");
  });

  it("inserts a node at the head of a populated linked list", () => {
    const LL = new LinkedList<string>();

    LL.push("My second node");
    LL.push("My third node");
    LL.insertAt("My first node", 0);

    expect(LL.getByIndex(0)).toEqual("My first node");
    expect(LL.getByIndex(1)).toEqual("My second node");
    expect(LL.getByIndex(2)).toEqual("My third node");
  });

  it("inserts a node at the tail of a populated linked list", () => {
    const LL = new LinkedList<string>();

    LL.push("My first node");
    LL.push("My second node");
    LL.insertAt("My third node", 2);

    expect(LL.getByIndex(2)).toEqual("My third node");
  });
});
