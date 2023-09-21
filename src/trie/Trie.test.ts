import { Trie } from "./Trie.js";
import { Node } from "./Node.js";

type NodeTuple = [
  element: string,
  count: number,
  isComplete: boolean,
];

/**
 * Test helper for inspecting nodes along the traversal path.
 * @param root - node to start the traversal at
 * @param traversal - traversal instructions
 * @returns - an array of tuples describing each node visited
 */
function getNodeArray(root: Node, traversal: string): NodeTuple[] {
  return traversal.split("").map((char): NodeTuple => {
    if (!root.children.hasOwnProperty(char)) {
      return ["", 0, false];
    }
    
    root = root.children[char];

    return [
      root.element,
      root.count,
      root.complete.get(),
    ];
  })
}

describe("Trie", () => {
  describe("add()", () => {
    it("adds a single character word to an empty trie", () => {
      const trie = new Trie();

      trie.add("a");

      const { root } = trie.__debug();
      const a = getNodeArray(root, "a");
      expect(a[0]).toEqual(["a", 0, true]);
    });

    it("adds a multi-character word to an empty trie", () => {
      const trie = new Trie();

      trie.add("ace");

      const { root } = trie.__debug();
      const ace = getNodeArray(root, "ace");
      expect(ace[2]).toEqual(["e", 0, true]);
    });

    it("adds multiple words to a trie with no overlap", () => {
      const trie = new Trie();

      trie.add("ace");
      trie.add("bev");

      const { root } = trie.__debug();
      const ace = getNodeArray(root, "ace");
      expect(ace[2]).toEqual(["e", 0, true]);
      const bev = getNodeArray(root, "bev");
      expect(bev[2]).toEqual(["v", 0, true]);
    });

    it("adds a kangaroo word to a trie", () => {
      const trie = new Trie();

      trie.add("malign");
      trie.add("malignant");

      const { root } = trie.__debug();
      const malignant = getNodeArray(root, "malignant");
      expect(malignant[5]).toEqual(["n", 1, true]);
      expect(malignant[8]).toEqual(["t", 0, true]);
    });

    it("adds a joey word to a trie", () => {
      const trie = new Trie();
      
      trie.add("malignant");
      trie.add("malign");

      const { root } = trie.__debug();
      const malignant = getNodeArray(root, "malignant");
      expect(malignant[5]).toEqual(["n", 1, true]);
      expect(malignant[8]).toEqual(["t", 0, true]);
    });
  });

  describe("remove()", () => {
    it("removes all nodes from a one word Trie", () => {
      const trie = new Trie();

      trie.add("removable");

      let { root } = trie.__debug();
      const removable = getNodeArray(root, "removable");
      expect(removable[8]).toEqual(["e", 0, true]);

      trie.remove("removable");

      ({ root } = trie.__debug());

      expect(root.children).toEqual({});
    });
  
    it("removes only the nodes not used by another word", () => {
      const trie = new Trie();

      trie.add("removable");
      trie.add("remo");

      let { root } = trie.__debug();
      let removable = getNodeArray(root, "removable");
      expect(removable[8]).toEqual(["e", 0, true]);
      expect(removable[3]).toEqual(["o", 1, true]);

      trie.remove("removable");

      ({ root } = trie.__debug());
      removable = getNodeArray(root, "remo");
      expect(removable[3]).toEqual(["o", 0, true]);
    });
  
    it("removes no nodes when all are used by another word", () => {
      const trie = new Trie();

      trie.add("removable");
      trie.add("remo");

      let { root } = trie.__debug();
      let removable = getNodeArray(root, "removable");
      expect(removable[3]).toEqual(["o", 1, true]);
      expect(removable[8]).toEqual(["e", 0, true]);

      trie.remove("remo");

      ({ root } = trie.__debug());
      removable = getNodeArray(root, "removable");
      expect(removable[3]).toEqual(["o", 1, false]);
    });
  
    it("throws an error if the word doesn't exist", () => {
      const trie = new Trie();

      expect(() => trie.remove("invisible")).toThrow("invisible does not exist");
    });
  });

  describe("has()", () => {
    it("returns true if the word exists", () =>{
      const trie = new Trie();

      trie.add("found");

      expect(trie.has("found")).toBe(true);
    });

    it("returns false if the word does not exist", () =>{
      const trie = new Trie();

      expect(trie.has("missing")).toBe(false);
    });

    it("returns false if the word no longer exists", () =>{
      const trie = new Trie();

      trie.add("liberate");
      expect(trie.has("liberate")).toBe(true);

      trie.remove("liberate");
      expect(trie.has("liberate")).toBe(false);
    });
  });

  describe("search()", () => {
    it("returns an empty array if the trie is empty", () => {
      const trie = new Trie();

      expect(trie.search("fruitless")).toEqual([]);
    });

    it("returns one matching word on an exact match", () => {
      const trie = new Trie();

      trie.add("emenate");

      expect(trie.search("emenate")).toEqual(["emenate"]);
    });

    it("returns one matching word on a partial match", () => {
      const trie = new Trie();

      trie.add("emenate");

      expect(trie.search("eme")).toEqual(["emenate"]);
    });

    it("returns matching words in a populated trie", () => {
      const trie = new Trie();

      trie.add("indistinguishable");
      trie.add("indepth");
      trie.add("interest");
      trie.add("identification");
      trie.add("unrelated");

      expect(trie.search("ind")).toEqual(["indepth", "indistinguishable"]);
    });

    it("returns all words in a trie", () => {
      const trie = new Trie();

      trie.add("indistinguishable");
      trie.add("indepth");
      trie.add("interest");

      expect(trie.search("in")).toEqual(["interest", "indepth", "indistinguishable"]);
    });

    it("does not return a word removed from the trie", () => {
      const trie = new Trie();

      trie.add("indistinguishable");
      trie.add("indepth");
      trie.add("interest");

      trie.remove("indepth");

      expect(trie.search("in")).toEqual(["interest", "indistinguishable"]);
    });
  });
});
