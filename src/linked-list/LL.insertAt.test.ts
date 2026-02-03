import { LinkedList } from "./LinkedList.js";

describe("LinkedList.insert()", () => {
  it("inserts a node at the head of an empty linked list", () => {
    const LL = LinkedList.elements<string>();

    LL.insert(0, "My first node");

    expect(LL.get(0)).toEqual("My first node");
  });

  it("inserts a node at the middle of a populated linked list", () => {
    const LL = LinkedList.elements<string>();

    LL.insert(LL.size, "My first node");
    LL.insert(LL.size, "My third node");
    LL.insert(1, "My second node");

    expect(LL.get(1)).toEqual("My second node");
  });

  it("inserts a node at the head of a populated linked list", () => {
    const LL = LinkedList.elements<string>();

    LL.insert(LL.size, "My second node");
    LL.insert(LL.size, "My third node");
    LL.insert(0, "My first node");

    expect(LL.get(0)).toEqual("My first node");
    expect(LL.get(1)).toEqual("My second node");
    expect(LL.get(2)).toEqual("My third node");
  });

  it("inserts a node at the tail of a populated linked list", () => {
    const LL = LinkedList.elements<string>();

    LL.insert(LL.size, "My first node");
    LL.insert(LL.size, "My second node");
    LL.insert(2, "My third node");

    expect(LL.get(2)).toEqual("My third node");
  });
});
