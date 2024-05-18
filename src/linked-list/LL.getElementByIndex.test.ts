import { LinkedList } from "./LinkedList.js";

describe("LinkedList.getElementByIndex()", () => {
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
