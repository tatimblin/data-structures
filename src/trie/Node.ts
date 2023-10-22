import { Completable, Countable } from "../node/index.js";

export class Node {
  element: string;
  children: { [key:string]: Node };
  complete: Completable;
  count: Countable;

  constructor(element: string) {
    this.element = element;
    this.children = {};
    this.complete = new Completable();
    this.count = new Countable();
  }
}