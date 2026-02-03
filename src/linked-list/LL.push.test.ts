import { LinkedList } from "./LinkedList.js";

describe("LinkedList.insert() - push behavior", () => {
  it("adds node to tail of linked list", () => {
    const LL = LinkedList.elements<string>();

    LL.insert(LL.size, "My first node");

    expect(LL.get(0)).toEqual("My first node");
    expect(LL.size).toEqual(1);
  });
});
