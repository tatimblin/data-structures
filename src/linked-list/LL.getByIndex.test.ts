import { LinkedList } from "./LinkedList.js";

describe("LinkedList.get()", () => {
  it("gets from nth position in linked list", () => {
    const LL = LinkedList.elements<string>();

    LL.insert(LL.size, "My first node");
    LL.insert(LL.size, "My second node");
    LL.insert(LL.size, "My third node");

    expect(LL.get(0)).toEqual("My first node");
    expect(LL.get(1)).toEqual("My second node");
    expect(LL.get(2)).toEqual("My third node");
  });

  it("throws an error when index is out of bounds", () => {
    const LL = LinkedList.elements<string>();

    LL.insert(LL.size, "My first node");
    LL.insert(LL.size, "My second node");
    LL.insert(LL.size, "My third node");

    expect(() => LL.get(-1)).toThrow("Index is out of bounds");
    expect(() => LL.get(3)).toThrow("Index is out of bounds");
  });
});
