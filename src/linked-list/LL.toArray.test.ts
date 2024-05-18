import { LinkedList } from "./LinkedList.js";

describe("LinkedList.toArray()", () => {
  it("returns complete linked list as a list of elements", () => {
    const LL = new LinkedList<string>();

    LL.push("My first node");
    LL.push("My second node");
    LL.push("My third node");

    expect(LL.toArray()).toEqual(["My first node", "My second node", "My third node"]);
  });

  it("returns partial linked list as a list of elements", () => {
    const LL = new LinkedList<string>();

    LL.push("My first node");
    LL.push("My second node");
    LL.push("My third node");
    LL.push("My fourth node");
    LL.push("My fifth node");

    expect(LL.toArray(1, 3)).toEqual(["My second node", "My third node", "My fourth node"]);
  });

  it("returns partial linked list as a list of elements with range overload", () => {
    const LL = new LinkedList<string>();

    LL.push("My first node");
    LL.push("My second node");
    LL.push("My third node");

    expect(LL.toArray(1, 5)).toEqual(["My second node", "My third node"]);
  });
});
