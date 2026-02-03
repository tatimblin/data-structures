import * as path from 'path';
import * as fs from 'fs';
import { LinkedList } from "./LinkedList.js";
import type { User } from "./__fixtures__/types.js";

const dataPath = path.resolve(__dirname, "__fixtures__", "data.json");
const rawData = fs.readFileSync(dataPath, "utf8");
const { users }: { users: User[] } = JSON.parse(rawData);

describe("LinkedList.find() and findIndex()", () => {
  it("finds the head of a linked list", () => {
    const LL = LinkedList.elements<number>();

    expect(LL.find(1)).toEqual(null);
    expect(LL.findIndex(1)).toEqual(-1);

    LL.insert(LL.size, 1);

    expect(LL.find(1)).toEqual(1);
    expect(LL.findIndex(1)).toEqual(0);
  });

  it("finds a middle node in a linked list", () => {
    const LL = LinkedList.elements<number>();

    LL.insert(LL.size, 1);
    LL.insert(LL.size, 2);
    LL.insert(LL.size, 3);

    expect(LL.find(2)).toEqual(2);
    expect(LL.findIndex(2)).toEqual(1);
  });

  it("finds the tail of a linked list", () => {
    const LL = LinkedList.elements<number>();

    LL.insert(LL.size, 1);
    LL.insert(LL.size, 2);
    LL.insert(LL.size, 3);

    expect(LL.find(3)).toEqual(3);
    expect(LL.findIndex(3)).toEqual(2);
  });

  it("returns null/-1 when the element is not found", () => {
    const LL = LinkedList.elements<number>();

    LL.insert(LL.size, 1);
    LL.insert(LL.size, 3);
    LL.insert(LL.size, 5);

    expect(LL.find(2)).toEqual(null);
    expect(LL.findIndex(2)).toEqual(-1);
  });

  it("finds a match for a complex data type", () => {
    const LL = LinkedList.elements<User>();

    LL.insert(LL.size, users[0]);

    expect(LL.find(users[0])).toEqual(users[0]);
    expect(LL.findIndex(users[0])).toEqual(0);
  });

  it("finds the first match for a complex data type", () => {
    const LL = LinkedList.elements<User>();

    LL.insert(LL.size, users[0]);
    LL.insert(LL.size, users[1]);
    LL.insert(LL.size, users[1]);

    expect(LL.find(users[1])).toEqual(users[1]);
    expect(LL.findIndex(users[1])).toEqual(1);
  });

  it("finds a match for a complex data type, using a custom matcher", () => {
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
