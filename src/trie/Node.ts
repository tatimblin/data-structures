import { Completable, Countable } from "../node/index.js";

export class Node {
  element: string;
  children: { [key:string]: Node };
  complete: Completable;
  count: Countable;
  #weight: number;

  constructor(element: string, weight = Infinity) {
    this.element = element;
    this.children = {};
    this.complete = new Completable();
    this.count = new Countable();
    this.#weight = weight;
  }

  get weight() {
    return this.#weight;
  }

  set weight(num: number) {
    this.#weight = num;
  }
}