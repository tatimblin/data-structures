import { deepEquals } from "./deep-equals.js"

const tests = [
  ["hello", "hello", true],
  ["hello", "world", false],
  [{first: "Tristan"}, {first: "Tristan"}, true],
  [{first: "Tristan"}, {last: "Timblin"}, false],
  [["ace", "bev", "chaz"], ["ace", "bev", "chaz"], true],
  [["ace", "bev", "chaz"], ["ace", "bev"], false],
  [{single: { double: "tree"}}, {single: { double: "tree"}}, true],
  [{single: { double: "tree"}}, {single: { triple: "double"}}, false],
  [["ace", "bev", ["chaz"]], ["ace", "bev", ["chaz"]], true],
  [["ace", "bev", ["chaz"]], ["ace", "bev"], false],
]

describe("deepEquals", () => {
  for (let i = 0; i < tests.length; i++) {
    const [a, b, expected] = tests[i];
    it(`should ${expected ? "match" : "not match"}`, () => {
      expect(deepEquals(a, b)).toEqual(expected);
    });
  }
})