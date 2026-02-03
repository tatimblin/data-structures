import { LinkedList } from "./LinkedList.js";

describe("LinkedList.remove() - pop behavior", () => {
  it("removes head node when size is one", () => {
    const LL = LinkedList.elements<string>();

    LL.insert(LL.size, "My first node");
    LL.remove(LL.size - 1);

    expect(LL.size).toEqual(0);
  });

  it("removes tail node", () => {
    const LL = LinkedList.elements<string>();

    LL.insert(LL.size, "My first node");
    LL.insert(LL.size, "My second node");
    LL.remove(LL.size - 1);

    expect(LL.size).toEqual(1);
    expect(() => LL.get(1)).toThrow("Index is out of bounds");
  });

  it("removes tail node of a large linked list", () => {
    const LL = LinkedList.elements<string>();

    LL.insert(LL.size, "My first node");
    LL.insert(LL.size, "My second node");
    LL.insert(LL.size, "My third node");
    LL.insert(LL.size, "My fourth node");
    LL.insert(LL.size, "My fifth node");
    LL.insert(LL.size, "My sixth node");
    LL.insert(LL.size, "My seventh node");

    expect(LL.remove(LL.size - 1)).toEqual("My seventh node");
    expect(LL.size).toEqual(6);
    expect(() => LL.get(6)).toThrow("Index is out of bounds");
  });
});
