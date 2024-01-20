import { LeastRecentlyUsed } from "./index.js";

describe("LeastRecentlyUsed", () => {
    describe("push()", () => {
        it("adds new elements to the head of the list as the cache overloads", () => {
            const LRU = new LeastRecentlyUsed<number>(3);

            LRU.push(1);
            LRU.push(2);
            LRU.push(3);
            LRU.push(4);
            LRU.push(5);

            expect(LRU.indexOf(5)).toBe(0);
            expect(LRU.indexOf(4)).toEqual(1);
            expect(LRU.indexOf(3)).toEqual(2);
            expect(LRU.indexOf(2)).toEqual(-1);
            expect(LRU.indexOf(1)).toEqual(-1);
        });
    });

    describe("shift()", () => {
        it("does nothing if the cache is empty", () => {
            const LRU = new LeastRecentlyUsed<number>(3);

            expect(() => LRU.shift()).toThrow("Index is out of bounds");
        });

        it("removes and returns the element at the head of the cache", () => {
            const LRU = new LeastRecentlyUsed<number>(3);

            LRU.push(3);
            LRU.push(2);
            LRU.push(1);

            expect(LRU.shift()).toEqual(1);
            expect(LRU.shift()).toEqual(2);
            expect(LRU.shift()).toEqual(3);
        });
        it("errors out when the cache is emptied", () => {
            const LRU = new LeastRecentlyUsed<number>(3);

            LRU.push(4);
            LRU.push(3);
            LRU.push(2);
            LRU.push(1);

            expect(LRU.shift()).toEqual(1);
            expect(LRU.shift()).toEqual(2);
            expect(LRU.shift()).toEqual(3);
            expect(() => LRU.shift()).toThrow("Index is out of bounds");
        });
    });

    describe("list()", () => {
        it("", () => {
            const LRU = new LeastRecentlyUsed<number>(3);

            LRU.push(3);
            LRU.push(2);
            LRU.push(1);

            expect(LRU.list()).toEqual([1, 2, 3]);
        });
    });

    describe("clear()", () => {
        it("clears an empty cache", () => {
            const LRU = new LeastRecentlyUsed<number>(3);

            LRU.clear();
            
            expect(LRU.size).toEqual(0);
        });

        it("clears a populated cache", () => {
            const LRU = new LeastRecentlyUsed<number>(3);
            
            LRU.push(3);
            LRU.push(2);
            LRU.push(1);

            expect(LRU.size).toEqual(3);

            LRU.clear();
            
            expect(LRU.size).toEqual(0);
        });
    });

    describe("LinkedList.removeFrom()", () => {
        it("removes from the middle of the cache", () => {
            const LRU = new LeastRecentlyUsed<number>(3);

            LRU.push(3);
            LRU.push(2);
            LRU.push(1);

            LRU.removeFrom(1);

            expect(LRU.size).toEqual(2);
            expect(LRU.shift()).toEqual(1);
            expect(LRU.shift()).toEqual(3);
        });

        it("removes from the start of the cache", () => {
            const LRU = new LeastRecentlyUsed<number>(3);

            LRU.push(3);
            LRU.push(2);
            LRU.push(1);

            LRU.removeFrom(0);

            expect(LRU.size).toEqual(2);
            expect(LRU.shift()).toEqual(2);
            expect(LRU.shift()).toEqual(3);
        });

        it("removes from the end of the cache", () => {
            const LRU = new LeastRecentlyUsed<number>(3);

            LRU.push(3);
            LRU.push(2);
            LRU.push(1);

            LRU.removeFrom(2);

            expect(LRU.size).toEqual(2);
            expect(LRU.shift()).toEqual(1);
            expect(LRU.shift()).toEqual(2);
        });
    });

    describe("LinkedList.removeElement()", () => {
        // it("removes the only element from cache", () => {
        //     const LRU = new LeastRecentlyUsed<number>(3);

        //     LRU.push(1);

        //     expect(LRU.indexOf(1)).toEqual(0);

        //     LRU.removeElement(1);

        //     expect(LRU.indexOf(1)).toEqual(-1);
        // });

        // it("removes a specific element from cache", () => {
        //     const LRU = new LeastRecentlyUsed<number>(3);

        //     LRU.push(3);
        //     LRU.push(2);
        //     LRU.push(1);

        //     expect(LRU.indexOf(2)).toEqual(1);

        //     LRU.removeElement(2);

        //     expect(LRU.indexOf(2)).toEqual(-1);
        // });

        it("removes the an unknown element from cache", () => {
            const LRU = new LeastRecentlyUsed<number>(3);

            LRU.push(1);

            expect(LRU.indexOf(2)).toEqual(-1);
        });
    });

    // describe("LinkedList.indexOf()", () => {
    //     it("", () => {
    //         const LRU = new LeastRecentlyUsed();
    //     });
    // });
});
