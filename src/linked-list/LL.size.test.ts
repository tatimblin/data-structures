import { LinkedList } from "./LinkedList.js";

describe("LinkedList.size", () => {
  it("adds multiple nodes to linked list", () => {
    const LL = LinkedList.elements<string>();

    LL.insert(LL.size, "My first node");
    LL.insert(LL.size, "My second node");
    LL.insert(LL.size, "My third node");

    expect(LL.size).toEqual(3);
  });
});
