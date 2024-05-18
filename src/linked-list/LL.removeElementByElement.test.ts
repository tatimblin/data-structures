import { LinkedList } from "./LinkedList.js";

describe("LinkedList.removeElementByElement()" , () => {
  it("removes the head of a linked list with a single node", () => {
    const LL = new LinkedList<number>();

    LL.push(1);

    expect(LL.removeElementByElement(1)).toEqual(0);
    expect(LL.size).toEqual(0);
  });

  it("removes a node from the head of a linked list", () => {
    const LL = new LinkedList<number>();

    LL.push(1);
    LL.push(2);
    LL.push(3);

    expect(LL.removeElementByElement(1)).toEqual(0);
    expect(LL.size).toEqual(2);
  });

  it("removes a node from the middle of a linked list", () => {
    const LL = new LinkedList<number>();

    LL.push(1);
    LL.push(2);
    LL.push(3);
    LL.push(4);

    expect(LL.removeElementByElement(3)).toEqual(2);
    expect(LL.size).toEqual(3);
  });

  it("removes a node from the middle of a linked list of arrays", () => {
    const LL = new LinkedList<number[]>();

    LL.push([1, 2, 3]);
    LL.push([2, 3, 4]);
    LL.push([3, 4, 5]);
    LL.push([4, 5, 6]);

    expect(LL.removeElementByElement([3, 4, 5])).toEqual(2);
    expect(LL.size).toEqual(3);
  });

  it("removes a node from the middle of a linked list of objects", () => {
    const LL = new LinkedList<{ first: string, last: string }>();

    LL.push({ first: "Andrew", last: "Timblin"});
    LL.push({ first: "Barbara", last: "Timblin"});
    LL.push({ first: "Tristan", last: "Timblin"});
    LL.push({ first: "Jeremy", last: "Timblin"});

    expect(LL.removeElementByElement({ first: "Tristan", last: "Timblin"})).toEqual(2);
    expect(LL.size).toEqual(3);
  });

  it("removes a node from the middle of a linked list of deep nested objects", () => {
    const LL = new LinkedList<{ name: string, industry?: string[], distance: {[key: string]: number}}>();

    LL.push({ name: "San Francsico", industry: ["technology"], distance: { "San Jose": 48.5 }});
    LL.push({ name: "San Jose", industry: ["manufacturing"], distance: { "Sausalito": 62.1}});
    LL.push({ name: "Mountain View", industry: ["technology"], distance: { "San Francisco": 39.3 }});
    LL.push({ name: "Sausalito", distance: { "Mountain View": 49.7 }});

    expect(LL.removeElementByElement({ name: "San Francsico", industry: ["technology"], distance: { "San Jose": 48.5 }})).toEqual(0);
    expect(LL.size).toEqual(3);
  });

  it("removes a node from the tail of a linked list", () => {
    const LL = new LinkedList<number>();

    LL.push(1);
    LL.push(2);
    LL.push(3);

    expect(LL.removeElementByElement(3)).toEqual(2);
    expect(LL.size).toEqual(2);
  });

  it("throws an error when index is out of bounds", () => {
    const LL = new LinkedList<number>();

    LL.push(1);
    LL.push(2);
    LL.push(3);

    expect(LL.removeElementByElement(0)).toEqual(-1);
    expect(LL.removeElementByElement(4)).toEqual(-1);
  });
});
