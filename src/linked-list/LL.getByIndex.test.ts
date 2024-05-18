import { LinkedList } from "./LinkedList.js";

describe("LinkedList.getByIndex()", () => {
  it("gets from nth position in linked list", () => {
    const LL = new LinkedList<string>();

    LL.push("My first node");
    LL.push("My second node");
    LL.push("My third node");

    expect(LL.getByIndex(0)).toEqual(["My first node", 0]);
    expect(LL.getByIndex(1)).toEqual(["My second node", 1]);
    expect(LL.getByIndex(2)).toEqual(["My third node", 2]);
  });

  it("throws an error when index is out of bounds", () => {
    const LL = new LinkedList<string>();

    LL.push("My first node");
    LL.push("My second node");
    LL.push("My third node");

    expect(() => LL.getByIndex(-1)).toThrow("Index is out of bounds");
    expect(() => LL.getByIndex(3)).toThrow("Index is out of bounds");
  });
});
