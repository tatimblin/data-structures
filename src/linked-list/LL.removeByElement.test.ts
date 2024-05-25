import * as path from 'path';
import * as fs from 'fs';
import { LinkedList } from "./LinkedList.js";
import type { User, City } from "./__fixtures__/types.js";

const dataPath = path.resolve(__dirname, "__fixtures__", "data.json");
const rawData = fs.readFileSync(dataPath, "utf8");
const { users, cities }: {
  users: User[],
  cities: City[],
} = JSON.parse(rawData);

describe("LinkedList.removeByElement()" , () => {
  it("removes the head of a linked list with a single node", () => {
    const LL = new LinkedList<number>();

    LL.push(1);

    expect(LL.removeByElement(1)).toEqual([1, 0]);
    expect(LL.size).toEqual(0);
  });

  it("removes a node from the head of a linked list", () => {
    const LL = new LinkedList<number>();

    LL.push(1);
    LL.push(2);
    LL.push(3);

    expect(LL.removeByElement(1)).toEqual([1, 0]);
    expect(LL.size).toEqual(2);
  });

  it("removes a node from the middle of a linked list", () => {
    const LL = new LinkedList<number>();

    LL.push(1);
    LL.push(2);
    LL.push(3);
    LL.push(4);

    expect(LL.removeByElement(3)).toEqual([3, 2]);
    expect(LL.size).toEqual(3);
  });

  it("removes a node from the middle of a linked list of arrays", () => {
    const LL = new LinkedList<number[]>();

    LL.push([1, 2, 3]);
    LL.push([2, 3, 4]);
    LL.push([3, 4, 5]);
    LL.push([4, 5, 6]);

    expect(LL.removeByElement([3, 4, 5])).toEqual([[3, 4, 5], 2]);
    expect(LL.size).toEqual(3);
  });

  it("removes a node from the middle of a linked list of objects", () => {
    const LL = new LinkedList<{ first: string, last: string }>();

    LL.push({ first: "Andrew", last: "Timblin"});
    LL.push({ first: "Barbara", last: "Timblin"});
    LL.push({ first: "Tristan", last: "Timblin"});
    LL.push({ first: "Jeremy", last: "Timblin"});

    expect(LL.removeByElement({ first: "Tristan", last: "Timblin"})).toEqual([{ first: "Tristan", last: "Timblin"}, 2]);
    expect(LL.size).toEqual(3);
  });

  it("removes a node from the middle of a linked list of deep nested objects", () => {
    const LL = new LinkedList<City>();

    LL.push(cities[0]);
    LL.push(cities[1]);
    LL.push(cities[2]);
    LL.push(cities[3]);

    expect(LL.removeByElement(cities[0])).toEqual([cities[0], 0]);
    expect(LL.size).toEqual(3);
  });

  it("removes a node from the tail of a linked list", () => {
    const LL = new LinkedList<number>();

    LL.push(1);
    LL.push(2);
    LL.push(3);

    expect(LL.removeByElement(3)).toEqual([3, 2]);
    expect(LL.size).toEqual(2);
  });

  it("throws an error when index is out of bounds", () => {
    const LL = new LinkedList<number>();

    LL.push(1);
    LL.push(2);
    LL.push(3);

    expect(LL.removeByElement(0)).toEqual([null, -1]);
    expect(LL.removeByElement(4)).toEqual([null, -1]);
  });

  it("removes a complex data type, using a custom matcher", () => {
    const LL = new LinkedList<User, string>();

    LL.push(users[0]);
    LL.push(users[1]);
    LL.push(users[1]);

    expect(
      LL
        .withMatcher((user) => user.first)
        .getByElement("Alan")
    ).toEqual([users[1], 1]);
  });
});
