import { Trie } from "./Trie";

describe("Trie", () => {
  describe("add()", () => {
    it("adds a single character word to an empty trie", () => {
      const trie = new Trie();

      trie.add("a");

      expect(trie.search("")).toEqual(["a"]);
    });

    it("adds a multi-character word to an empty trie", () => {
      const trie = new Trie();

      trie.add("ace");

      expect(trie.search("")).toEqual(["ace"]);
    });

    it("adds multiple words to a trie with no overlap", () => {
      const trie = new Trie();

      trie.add("ace");
      trie.add("bev");

      expect(trie.search("")).toEqual(["ace", "bev"]);
    });

    it("adds a kangaroo word to a trie", () => {
      const trie = new Trie();

      trie.add("malign");
      trie.add("malignant");

      expect(trie.search("")).toEqual(["malign", "malignant"]);
    });

    it("adds a joey word to a trie", () => {
      const trie = new Trie();
      
      trie.add("malignant");
      trie.add("malign");

      expect(trie.search("")).toEqual(["malign", "malignant"]);
    });
  })
});
