import { LinkedList } from "./LinkedList.js";

describe("LinkedList.getIndexByElement()" , () => {
  it("gets the index of the head of a linked list", () => {
    const LL = new LinkedList<number>();

    expect(LL.getIndexByElement(1)).toEqual(-1);

    LL.push(1);

    expect(LL.getIndexByElement(1)).toEqual(0);
  });

  it("gets the index of a middle node in a linked list", () => {
    const LL = new LinkedList<number>();

    LL.push(1);
    LL.push(2);
    LL.push(3);

    expect(LL.getIndexByElement(2)).toEqual(1);
  });

  it("gets the index of the tail of a linked list", () => {
    const LL = new LinkedList<number>();

    LL.push(1);
    LL.push(2);
    LL.push(3);

    expect(LL.getIndexByElement(3)).toEqual(2);
  });

  it("returns -1 when the element is not found", () => {
    const LL = new LinkedList<number>();

    LL.push(1);
    LL.push(3);
    LL.push(5);

    expect(LL.getIndexByElement(2)).toEqual(-1);
  });
});
