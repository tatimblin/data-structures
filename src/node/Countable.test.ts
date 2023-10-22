import { Countable } from "./Countable.js";

class Node {
    count: Countable;

    constructor(count = 0) {
        this.count = new Countable(count);
    }
}

describe("Countable", () => {
    it("can initialize count", () => {
        const node = new Node(5);
        expect(node.count.get()).toBe(5);
    });

    it("can read count", () => {
        const node = new Node(0);
        expect(node.count.get()).toBe(0);
    });

    it("can increment count", () => {
        const node = new Node(0);
        node.count.increment(3)
        expect(node.count.get()).toBe(3);
    });

    it("can decrement count", () => {
        const node = new Node(3);
        node.count.decrement(3)
        expect(node.count.get()).toBe(0);
    });
});
