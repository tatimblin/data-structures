import { LinkedList } from "./LinkedList.js";

describe("LinkedList.toArray()", () => {
  it("returns complete linked list as a list of elements", () => {
    const LL = LinkedList.elements<string>();

    LL.insert(LL.size, "My first node");
    LL.insert(LL.size, "My second node");
    LL.insert(LL.size, "My third node");

    expect(LL.toArray()).toEqual(["My first node", "My second node", "My third node"]);
  });

  it("returns partial linked list as a list of elements", () => {
    const LL = LinkedList.elements<string>();

    LL.insert(LL.size, "My first node");
    LL.insert(LL.size, "My second node");
    LL.insert(LL.size, "My third node");
    LL.insert(LL.size, "My fourth node");
    LL.insert(LL.size, "My fifth node");

    expect(LL.toArray(1, 3)).toEqual(["My second node", "My third node", "My fourth node"]);
  });

  it("returns partial linked list as a list of elements with range overload", () => {
    const LL = LinkedList.elements<string>();

    LL.insert(LL.size, "My first node");
    LL.insert(LL.size, "My second node");
    LL.insert(LL.size, "My third node");

    expect(LL.toArray(1, 5)).toEqual(["My second node", "My third node"]);
  });
});
