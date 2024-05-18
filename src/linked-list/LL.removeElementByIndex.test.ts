import { LinkedList } from "./LinkedList.js";

describe("removeElementByIndex()" , () => {
  it("removes the head of a linked list with a single node", () => {
    const LL = new LinkedList<number>();

    LL.push(1);

    expect(LL.removeElementByIndex(0)).toEqual(1);
    expect(LL.size).toEqual(0);
  });

  it("removes a node from the head of a linked list", () => {
    const LL = new LinkedList<number>();

    LL.push(1);
    LL.push(2);
    LL.push(3);

    expect(LL.removeElementByIndex(0)).toEqual(1);
    expect(LL.size).toEqual(2);
  });

  it("removes a node from the middle of a linked list", () => {
    const LL = new LinkedList<number>();

    LL.push(1);
    LL.push(2);
    LL.push(3);
    LL.push(4);

    expect(LL.removeElementByIndex(2)).toEqual(3);
    expect(LL.size).toEqual(3);
  });

  it("removes a node from the tail of a linked list", () => {
    const LL = new LinkedList<number>();

    LL.push(1);
    LL.push(2);
    LL.push(3);

    expect(LL.removeElementByIndex(2)).toEqual(3);
    expect(LL.size).toEqual(2);
  });

  it("removes mulitple nodes from a linked list", () => {
    const LL = new LinkedList<number>();

    LL.push(1);
    LL.push(2);
    LL.push(3);

    expect(LL.removeElementByIndex(0)).toEqual(1);
    expect(LL.removeElementByIndex(1)).toEqual(3);
    expect(LL.size).toEqual(1);
  });

  it("removes mulitple consecutive nodes from a linked list", () => {
    const LL = new LinkedList<number>();

    LL.push(1);
    LL.push(2);
    LL.push(3);

    expect(LL.removeElementByIndex(1)).toEqual(2);
    expect(LL.removeElementByIndex(1)).toEqual(3);
    expect(LL.size).toEqual(1);
  });

  it("throws an error when index is out of bounds", () => {
    const LL = new LinkedList<number>();

    LL.push(1);
    LL.push(2);
    LL.push(3);

    expect(() => LL.removeElementByIndex(-1)).toThrow("Index is out of bounds");
    expect(() => LL.removeElementByIndex(3)).toThrow("Index is out of bounds");
  });
});
