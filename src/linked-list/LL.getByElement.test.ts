import * as path from 'path';
import * as fs from 'fs';
import { LinkedList } from "./LinkedList.js";
import type { User } from "./__fixtures__/types.js";

const dataPath = path.resolve(__dirname, "__fixtures__", "data.json");
const rawData = fs.readFileSync(dataPath, "utf8");
const { users }: { users: User[] } = JSON.parse(rawData);

describe("LinkedList.getByElement()" , () => {
  it("gets the index of the head of a linked list", () => {
    const LL = new LinkedList<number>();

    expect(LL.getByElement(1)).toEqual([null, -1]);

    LL.push(1);

    expect(LL.getByElement(1)).toEqual([1, 0]);
  });

  it("gets the index of a middle node in a linked list", () => {
    const LL = new LinkedList<number>();

    LL.push(1);
    LL.push(2);
    LL.push(3);

    expect(LL.getByElement(2)).toEqual([2, 1]);
  });

  it("gets the index of the tail of a linked list", () => {
    const LL = new LinkedList<number>();

    LL.push(1);
    LL.push(2);
    LL.push(3);

    expect(LL.getByElement(3)).toEqual([3, 2]);
  });

  it("returns -1 when the element is not found", () => {
    const LL = new LinkedList<number>();

    LL.push(1);
    LL.push(3);
    LL.push(5);

    expect(LL.getByElement(2)).toEqual([null, -1]);
  });

  it("finds a match for a complex data type", () => {
    const LL = new LinkedList<User>();

    LL.push(users[0]);

    expect(LL.getByElement(users[0])).toEqual([users[0], 0]);
  });

  it("finds the first match for a complex data type", () => {
    const LL = new LinkedList<User>();

    LL.push(users[0]);
    LL.push(users[1]);
    LL.push(users[1]);

    expect(LL.getByElement(users[1])).toEqual([users[1], 1]);
  });

  it("finds a match for a complex data type, using a custom matcher", () => {
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
