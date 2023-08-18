import { Trie } from "./Trie";
import { Node } from "./Node";

function getNodeProperties(node: Node, traversal: string[]): [
  element: string,
  descendantCount: number,
  isComplete: boolean
] {
  for (const [i, char] of traversal.entries()) {
    if (node.children[char]) {
      node = node.children[char];
    } else {
      throw new Error(`Node does not exist at: ${traversal.slice(0, i)}`);
    }
  }

  return [
    node.element,
    node.count,
    node.complete.get()
  ];
}

describe("Trie", () => {
  describe("add()", () => {
    it("adds a single character word to an empty trie", () => {
      const trie = new Trie();

      trie.add("a");

      const { root } = trie.__debug();
      const flat = getNodeProperties(root, ["a"]);
      expect(flat).toEqual(["a", 0, true]);
    });

    it("adds a multi-character word to an empty trie", () => {
      const trie = new Trie();

      trie.add("ace");

      const { root } = trie.__debug();
      const flat = getNodeProperties(root, ["a", "c", "e"]);
      expect(flat).toEqual(["e", 0, true]);
    });

    it("adds multiple words to a trie with no overlap", () => {
      const trie = new Trie();

      trie.add("ace");
      trie.add("bev");

      const { root } = trie.__debug();
      const e = getNodeProperties(root, ["a", "c", "e"]);
      expect(e).toEqual(["e", 0, true]);
      const v = getNodeProperties(root, ["b", "e", "v"]);
      expect(v).toEqual(["v", 0, true]);
    });

    it("adds a kangaroo word to a trie", () => {
      const trie = new Trie();

      trie.add("malign");
      trie.add("malignant");

      const { root } = trie.__debug();
      const malign = getNodeProperties(root, ["m", "a", "l", "i", "g", "n"]);
      expect(malign).toEqual(["n", 1, true]);
      const malignant = getNodeProperties(root, ["m", "a", "l", "i", "g", "n", "a", "n", "t"]);
      expect(malignant).toEqual(["t", 0, true]);
    });

    it("adds a joey word to a trie", () => {
      const trie = new Trie();
      
      trie.add("malignant");
      trie.add("malign");

      const { root } = trie.__debug();
      const malign = getNodeProperties(root, ["m", "a", "l", "i", "g", "n"]);
      expect(malign).toEqual(["n", 1, true]);
      const malignant = getNodeProperties(root, ["m", "a", "l", "i", "g", "n", "a", "n", "t"]);
      expect(malignant).toEqual(["t", 0, true]);
    });
  })
});
