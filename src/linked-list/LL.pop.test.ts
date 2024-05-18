import { LinkedList } from "./LinkedList.js";

describe("LinkedList.pop()" , () => {
  it("removes head node when size is one", () => {
    const LL = new LinkedList<string>();

    LL.push("My first node");
    LL.pop();

    expect(LL.size).toEqual(0);
  });

  it("removes tail node", () => {
    const LL = new LinkedList<string>();

    LL.push("My first node");
    LL.push("My second node");
    LL.pop();

    expect(LL.size).toEqual(1);
    expect(() => LL.getByIndex(1)).toThrow("Index is out of bounds");
  });

  it("removes tail node of a large linked list", () => {
    const LL = new LinkedList<string>();

    LL.push("My first node");
    LL.push("My second node");
    LL.push("My third node");
    LL.push("My fourth node");
    LL.push("My fifth node");
    LL.push("My sixth node");
    LL.push("My seventh node");

    expect(LL.pop()).toEqual("My seventh node");
    expect(LL.size).toEqual(6);
    expect(() => LL.getByIndex(6)).toThrow("Index is out of bounds");
  });
});
