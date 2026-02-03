import { LinkedList } from "./LinkedList.js";

describe("LinkedList.removeNode()", () => {
  it("removes the node from the linked list", () => {
    const LL = LinkedList.nodes<number>();

    const node = LL.insert(LL.size, 1);

    expect(LL.size).toEqual(1);

    LL.removeNode(node);

    expect(LL.size).toEqual(0);
  });

  it("removes the node from the middle of a linked list", () => {
    const LL = LinkedList.nodes<number>();

    LL.insert(LL.size, 1);
    const node = LL.insert(LL.size, 2);
    LL.insert(LL.size, 3);

    expect(LL.size).toEqual(3);

    LL.removeNode(node);

    expect(LL.size).toEqual(2);
  });
});
