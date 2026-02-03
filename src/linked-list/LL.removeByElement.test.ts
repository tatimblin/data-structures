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

describe("LinkedList.removeBy()", () => {
  it("removes the head of a linked list with a single node", () => {
    const LL = LinkedList.elements<number>();

    LL.insert(LL.size, 1);

    expect(LL.removeBy(1)).toEqual(1);
    expect(LL.size).toEqual(0);
  });

  it("removes a node from the head of a linked list", () => {
    const LL = LinkedList.elements<number>();

    LL.insert(LL.size, 1);
    LL.insert(LL.size, 2);
    LL.insert(LL.size, 3);

    expect(LL.removeBy(1)).toEqual(1);
    expect(LL.size).toEqual(2);
  });

  it("removes a node from the middle of a linked list", () => {
    const LL = LinkedList.elements<number>();

    LL.insert(LL.size, 1);
    LL.insert(LL.size, 2);
    LL.insert(LL.size, 3);
    LL.insert(LL.size, 4);

    expect(LL.removeBy(3)).toEqual(3);
    expect(LL.size).toEqual(3);
  });

  it("removes a node from the middle of a linked list of arrays", () => {
    const LL = LinkedList.elements<number[]>();

    LL.insert(LL.size, [1, 2, 3]);
    LL.insert(LL.size, [2, 3, 4]);
    LL.insert(LL.size, [3, 4, 5]);
    LL.insert(LL.size, [4, 5, 6]);

    expect(LL.removeBy([3, 4, 5])).toEqual([3, 4, 5]);
    expect(LL.size).toEqual(3);
  });

  it("removes a node from the middle of a linked list of objects", () => {
    const LL = LinkedList.elements<{ first: string, last: string }>();

    LL.insert(LL.size, { first: "Andrew", last: "Timblin"});
    LL.insert(LL.size, { first: "Barbara", last: "Timblin"});
    LL.insert(LL.size, { first: "Tristan", last: "Timblin"});
    LL.insert(LL.size, { first: "Jeremy", last: "Timblin"});

    expect(LL.removeBy({ first: "Tristan", last: "Timblin"})).toEqual({ first: "Tristan", last: "Timblin"});
    expect(LL.size).toEqual(3);
  });

  it("removes a node from the middle of a linked list of deep nested objects", () => {
    const LL = LinkedList.elements<City>();

    LL.insert(LL.size, cities[0]);
    LL.insert(LL.size, cities[1]);
    LL.insert(LL.size, cities[2]);
    LL.insert(LL.size, cities[3]);

    expect(LL.removeBy(cities[0])).toEqual(cities[0]);
    expect(LL.size).toEqual(3);
  });

  it("removes a node from the tail of a linked list", () => {
    const LL = LinkedList.elements<number>();

    LL.insert(LL.size, 1);
    LL.insert(LL.size, 2);
    LL.insert(LL.size, 3);

    expect(LL.removeBy(3)).toEqual(3);
    expect(LL.size).toEqual(2);
  });

  it("returns null when element is not found", () => {
    const LL = LinkedList.elements<number>();

    LL.insert(LL.size, 1);
    LL.insert(LL.size, 2);
    LL.insert(LL.size, 3);

    expect(LL.removeBy(0)).toEqual(null);
    expect(LL.removeBy(4)).toEqual(null);
  });

  it("removes a complex data type, using a custom matcher", () => {
    const LL = LinkedList.elements<User, string>();

    LL.insert(LL.size, users[0]);
    LL.insert(LL.size, users[1]);
    LL.insert(LL.size, users[1]);

    const result = LL
      .withMatcher((user) => user.first)
      .find("Alan");

    expect(result).toEqual(users[1]);
  });
});
