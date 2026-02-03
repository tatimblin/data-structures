import { LinkedList } from "./LinkedList.js";

describe("LinkedList.remove()", () => {
  it("returns the node when using node mode", () => {
    const LL = LinkedList.nodes<number>();

    const node = LL.insert(LL.size, 1);

    expect(node.element).toEqual(1);
  });

  it("removes the head of a linked list with a single node", () => {
    const LL = LinkedList.elements<number>();

    LL.insert(LL.size, 1);

    expect(LL.remove(0)).toEqual(1);
    expect(LL.size).toEqual(0);
  });

  it("removes a node from the head of a linked list", () => {
    const LL = LinkedList.elements<number>();

    LL.insert(LL.size, 1);
    LL.insert(LL.size, 2);
    LL.insert(LL.size, 3);

    expect(LL.remove(0)).toEqual(1);
    expect(LL.size).toEqual(2);
  });

  it("removes a node from the middle of a linked list", () => {
    const LL = LinkedList.elements<number>();

    LL.insert(LL.size, 1);
    LL.insert(LL.size, 2);
    LL.insert(LL.size, 3);
    LL.insert(LL.size, 4);

    expect(LL.remove(2)).toEqual(3);
    expect(LL.size).toEqual(3);
  });

  it("removes a node from the tail of a linked list", () => {
    const LL = LinkedList.elements<number>();

    LL.insert(LL.size, 1);
    LL.insert(LL.size, 2);
    LL.insert(LL.size, 3);

    expect(LL.remove(2)).toEqual(3);
    expect(LL.size).toEqual(2);
  });

  it("removes multiple nodes from a linked list", () => {
    const LL = LinkedList.elements<number>();

    LL.insert(LL.size, 1);
    LL.insert(LL.size, 2);
    LL.insert(LL.size, 3);

    expect(LL.remove(0)).toEqual(1);
    expect(LL.remove(1)).toEqual(3);
    expect(LL.size).toEqual(1);
  });

  it("removes multiple consecutive nodes from a linked list", () => {
    const LL = LinkedList.elements<number>();

    LL.insert(LL.size, 1);
    LL.insert(LL.size, 2);
    LL.insert(LL.size, 3);

    expect(LL.remove(1)).toEqual(2);
    expect(LL.remove(1)).toEqual(3);
    expect(LL.size).toEqual(1);
  });

  it("throws an error when index is out of bounds", () => {
    const LL = LinkedList.elements<number>();

    LL.insert(LL.size, 1);
    LL.insert(LL.size, 2);
    LL.insert(LL.size, 3);

    expect(() => LL.remove(-1)).toThrow("Index is out of bounds");
    expect(() => LL.remove(3)).toThrow("Index is out of bounds");
  });
});
