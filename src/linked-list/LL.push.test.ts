import { LinkedList } from "./LinkedList.js";

describe("LinkedList.push()", () => {
  it("adds node to head of linked list", () => {
    const LL = new LinkedList<string>();

    LL.push("My first node");

    expect(LL.getByIndex(0)).toEqual("My first node");
    expect(LL.size).toEqual(1);
  });

  it("adds multiple nodes to linked list", () => {
    const LL = new LinkedList<string>();

    LL.push("My first node");
    LL.push("My second node");
    LL.push("My third node");

    expect(LL.size).toEqual(3);
  });
});