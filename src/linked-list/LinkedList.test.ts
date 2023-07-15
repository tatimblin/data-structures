import { LinkedList } from ".";

describe("LinkedList", () => {
  describe("add()", () => {
    it("adds node to head of linked list", () => {
      const LL = new LinkedList();

      LL.add("My first node");

      expect(LL.getFrom(0)).toEqual("My first node");
      expect(LL.size).toEqual(1);
    });

    it("adds multiple nodes to linked list", () => {
      const LL = new LinkedList();

      LL.add("My first node");
      LL.add("My second node");
      LL.add("My third node");

      expect(LL.size).toEqual(3);
    });
  });

  describe("getFrom()", () => {
    it("gets from nth position in linked list", () => {
      const LL = new LinkedList();

      LL.add("My first node");
      LL.add("My second node");
      LL.add("My third node");

      expect(LL.getFrom(0)).toEqual("My first node");
      expect(LL.getFrom(1)).toEqual("My second node");
      expect(LL.getFrom(2)).toEqual("My third node");
    });

    it("throws an error when index is out of bounds", () => {
      const LL = new LinkedList();

      LL.add("My first node");
      LL.add("My second node");
      LL.add("My third node");

      expect(() => LL.getFrom(-1)).toThrow("Index out of bounds");
      expect(() => LL.getFrom(3)).toThrow("Index out of bounds");
    });
  });
})