import { LinkedList } from "./LinkedList.js";

describe("LinkedList.push()", () => {
  it("adds node to head of linked list", () => {
    const LL = new LinkedList<string>();

    LL.push("My first node");

    expect(LL.getByIndex(0)).toEqual(["My first node", 0]);
    expect(LL.size).toEqual(1);
  });
});