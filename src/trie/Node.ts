import { Completable } from "../node/index.js";

export class Node {
  element: string;
  children: { [key:string]: Node };
  complete: Completable;
  #_count: number;

  constructor(element: string) {
    this.element = element;
    this.children = {};
    this.complete = new Completable();
    this.#_count = 0;
  }

  get count(): number {
    return this.#_count;
  }

  increment(): number {
    return this.#_count += 1;
  }

  decrement(): number {
    if (this.#_count <= 0) {
      return this.#_count;
    }

    return this.#_count -= 1;
  }
}