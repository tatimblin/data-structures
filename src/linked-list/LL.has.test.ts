import { LinkedList } from "./LinkedList.js";

describe("LinkedList.has", () => {
  it("confirms the presence of a primitive type", () => {
    const LL = new LinkedList<number>();

    LL.push(1);

    expect(LL.has(1)).toBe(true);
  });
});
